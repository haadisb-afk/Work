import tkinter as tk
import os
import subprocess
import webbrowser
from pathlib import Path

Setup = input("Create your password using letters, numbers, and symbols: ")
print("Password created successfully.")
while True:
    Password = input("Enter your password: ")
    if Password == Setup:
        print("Welcome!")
        break
    print("Incorrect password, please try again.")

image_path = Path(__file__).with_name("Xj58EYWQAj93cby2KK6xNY.png")
window = tk.Tk()
window.title("Private Image")
image = tk.PhotoImage(file=str(image_path))
image_label = tk.Label(window, image=image)
image_label.pack()


def open_chrome():
    url = "https://www.google.com"
    chrome_paths = (
        os.path.expandvars(r"%ProgramFiles%\Google\Chrome\Application\chrome.exe"),
        os.path.expandvars(r"%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"),
        os.path.expandvars(r"%LocalAppData%\Google\Chrome\Application\chrome.exe"),
    )

    for chrome_path in chrome_paths:
        if os.path.exists(chrome_path):
            subprocess.Popen([chrome_path, url])
            return

    webbrowser.open(url)


chrome_button = tk.Button(window, text="Open Chrome", command=open_chrome)
chrome_button.pack(pady=10)
window.mainloop()