from ocr_utils import extract_dob_text_from_image


image_path = "C:/Users/shant/Downloads/client/IDAssure/adhar.jpg"

dob = extract_dob_text_from_image(image_path)
print("\n Extracted DOB:", dob if dob else "DOB Not Found")
