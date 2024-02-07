from typing import Dict
import jwt, datetime
from django.conf import settings
from pyotp.totp import TOTP
from base64 import b32encode


def generate_jwt(email: str) -> str:
    payload = {
        'email': email,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(seconds=10),
        'iat': datetime.datetime.utcnow(),
    }
    jwt_token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return jwt_token


def decode_google_id_token(id_token: str) -> Dict[str, str]:
    decoded_token = jwt.decode(id_token, options={"verify_signature": False})
    return decoded_token


def re_encode_jwt(id: int) -> str:
    payload = {
        'id': id,
        'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
        'iat': datetime.datetime.utcnow(),
    }
    jwt_token = jwt.encode(payload, settings.SECRET_KEY, algorithm='HS256')
    return jwt_token

def get_2fa_qr_code(player_id: int) -> str:
    player_id = str(player_id)
    return TOTP(b32encode(player_id.encode("utf-8"))).provisioning_uri(name="player", issuer_name="ft_transcendence")

def check_2fa_code(player_id: int, code: int) -> bool:
    player_id = str(player_id)
    print("CHECK_2FA_CODE -> code:", code)
    print("-----------------------")
    totp = TOTP(b32encode(player_id.encode("utf-8")))
    print("+++++++++++++++++++++++")
    check = totp.verify(code)
    print("***********************")
    return check
