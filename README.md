# Gemini Bridge

ChatGPT ile Gemini API arasında köprü oluşturmak için hazırlanmıştır.

## Özellikler

- Gemini API bağlantısı
- API anahtarı environment variable üzerinden kullanılır
- `/chat` endpoint'i üzerinden mesaj gönderilebilir
- API anahtarı kaynak kodunda tutulmaz

## Kurulum

Environment variable:

`GEMINI_API_KEY`

olarak Gemini API anahtarını ekleyin.

## API

POST `/chat`

Örnek:

```json
{
  "message": "Merhaba Gemini"
}
