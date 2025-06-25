import pytesseract
import cv2
import numpy as np
from PIL import Image
import re

pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"

def preprocess_image(img_path):
    img = cv2.imread(img_path)
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    blur = cv2.medianBlur(gray, 3)
    thresh = cv2.adaptiveThreshold(
        blur, 255, cv2.ADAPTIVE_THRESH_MEAN_C, cv2.THRESH_BINARY, 41, 10
    )
    return thresh

def extract_dob_text_from_image(img_path):
    preprocessed = preprocess_image(img_path)
    text = pytesseract.image_to_string(preprocessed, lang='eng+hin')  
    print("🔹 OCR TEXT OUTPUT:\n==============================\n", text, "\n==============================")

    patterns = [
        r"\b\d{2}[/-]\d{2}[/-]\d{4}\b", 
        r"DOB[:\s]*([0-9]{2}[/-][0-9]{2}[/-][0-9]{4})",
        r"जन्म\s*तिथि[:\s]*([0-9]{2}[/-][0-9]{2}[/-][0-9]{4})"
    ]

    for pattern in patterns:
        match = re.search(pattern, text)
        if match:
            dob = match.group(1) if len(match.groups()) else match.group(0)
            print(" DOB Found:", dob)
            return dob

    print(" DOB Not Found")
    return None
