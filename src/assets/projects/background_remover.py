# ===================== Python Script to remove backgrounds of app screenshots using removebg api ============================== #
# =================================== Get your API Key from remove.bg ========================================================== #
# ===================== Do not run this script on files that alrady have their background removed ============================== #

import requests
from pathlib import Path

geobud_path = Path("geobud")
knc_path = Path("knc")
tmr_path = Path("tmr")

for file in geobud_path.iterdir():
    if(file.is_file()):
        print(file.name)
    
    response = requests.post('https://api.remove.bg/v1.0/removebg', 
                             files={'image_file':open(file, 'rb')},
                             data={'size':'auto',},
                             headers={'X-Api-Key':'your-api-key-here'})
    if response.status_code == requests.codes.ok:
        with open(file, 'wb') as out:
            out.write(response.content)
    else:
        print('Error: ', response.status_code, response.text)

for file in knc_path.iterdir():
    if(file.is_file()):
        print(file.name)
    
    response = requests.post('https://api.remove.bg/v1.0/removebg', 
                             files={'image_file':open(file, 'rb')},
                             data={'size':'auto',},
                             headers={'X-Api-Key':'your-api-key-here'})
    if response.status_code == requests.codes.ok:
        with open(file, 'wb') as out:
            out.write(response.content)
    else:
        print('Error: ', response.status_code, response.text)

for file in tmr_path.iterdir():
    if(file.is_file()):
        print(file.name)
    
    response = requests.post('https://api.remove.bg/v1.0/removebg', 
                             files={'image_file':open(file, 'rb')},
                             data={'size':'auto',},
                             headers={'X-Api-Key':'your-api-key-here'})
    if response.status_code == requests.codes.ok:
        with open(file, 'wb') as out:
            out.write(response.content)
    else:
        print('Error: ', response.status_code, response.text)
