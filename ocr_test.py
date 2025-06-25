import cv2
import pytesseract
import re

# Set tesseract path
pytesseract.pytesseract.tesseract_cmd = r"C:\Program Files\Tesseract-OCR\tesseract.exe"


image_path = "adhar2.jpg"  
img = cv2.imread(image_path)

# Preprocessing
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
gray = cv2.resize(gray, None, fx=2, fy=2, interpolation=cv2.INTER_LINEAR)
gray = cv2.GaussianBlur(gray, (5, 5), 0)
_, thresh = cv2.threshold(gray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)


ocr_text = pytesseract.image_to_string(thresh)
print("\n🔹 OCR TEXT OUTPUT:\n" + "="*30)
print(ocr_text)
print("="*30)


dob_patterns = [
    r"\d{2}/\d{2}/\d{4}",
    r"\d{2}-\d{2}-\d{4}",
    r"DOB[:\s]*([0-9]{2}[/\-][0-9]{2}[/\-][0-9]{4})",
    r"जन्म\s*तिथि[:\s]*([0-9]{2}[/\-][0-9]{2}[/\-][0-9]{4})"
]

dob_found = None
for pattern in dob_patterns:
    match = re.search(pattern, ocr_text, re.IGNORECASE)
    if match:
        dob_found = match.group(0)
        break

if dob_found:
    print(f" DOB Found: {dob_found}")
else:
    print("DOB Not Found")
