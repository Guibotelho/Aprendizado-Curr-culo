import pyautogui
import time
pyautogui.alert("O show vai começar")
pyautogui.PAUSE = 0.5
pyautogui.press('winleft')
pyautogui.write('chrome')
pyautogui.press('enter')
pyautogui.PAUSE= 2
pyautogui.sleep (3)
pyautogui.write('https://www.instagram.com/')
pyautogui.press('enter')
pyautogui.sleep (7)
pyautogui.moveTo(620, 120)
pyautogui.PAUSE = 1
pyautogui.click()
pyautogui.PAUSE = 1
pyautogui.click(x=620, y=120)
pyautogui.PAUSE = 1
pyautogui.write('ramonbotelho')
pyautogui.PAUSE = 1
pyautogui.press('enter')
pyautogui.PAUSE = 1
pyautogui.press('enter')
