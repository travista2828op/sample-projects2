# Image-to-Prompt API - Testing Guide

## 🧪 API Testing Instructions

This guide provides examples for testing the Image-to-Prompt API using cURL and other tools.

## 📋 Prerequisites

- Backend running on `http://localhost:3001`
- Valid OpenAI API key with Vision API access
- Test image files in JPEG, PNG, WebP, or GIF format
- cURL or similar HTTP client tool

## 🔗 API Endpoints

### 1. Health Check Endpoint

**Purpose:** Verify the backend is running

**Endpoint:** `GET /api/health`

**cURL:**
```bash
curl http://localhost:3001/api/health
```

**Expected Response (200 OK):**
```json
{
  "status": "ok",
  "timestamp": "2024-12-19T10:30:45.123Z"
}
```

---

### 2. Image Upload & Prompt Generation

**Purpose:** Upload an image and get AI-generated prompt

**Endpoint:** `POST /api/upload`

**Content-Type:** `multipart/form-data`

#### Basic cURL Example:

```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@/path/to/your/image.jpg"
```

#### cURL with Output Formatting:

```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@./sample.jpg" \
  -H "Accept: application/json" | jq .
```

#### cURL Save Response to File:

```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@./sample.jpg" \
  -o response.json
```

#### cURL with Verbose Output:

```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@./sample.jpg" \
  -v
```

---

## 📝 Example Requests

### Test Case 1: Simple Image Upload

**Command:**
```bash
curl -X POST http://localhost:3001/api/upload \
  -F "image=@test-image.jpg"
```

**Expected Response (200 OK):**
```json
{
  "success": true,
  "data": {
    "prompt": "A detailed description of the image analyzing composition, colors, lighting, mood, style, and all visual elements...",
    "fileName": "test-image.jpg",
    "fileSize": 102400
  }
}
```

### Test Case 2: File Too Large (Error)

**Command:**
```bash
# Create a file larger than 10MB
dd if=/dev/zero of=large-file.jpg bs=11M count=1

curl -X POST http://localhost:3001/api/upload \
  -F "image=@large-file.jpg"
```

**Expected Response (413 Payload Too Large):**
```json
{
  "success": false,
  "error": "File size exceeds maximum limit (10MB)"
}
```

### Test Case 3: Invalid File Type (Error)

**Command:**
```bash
# Try uploading a non-image file
curl -X POST http://localhost:3001/api/upload \
  -F "image=@document.pdf"
```

**Expected Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "Unsupported file type: application/pdf"
}
```

### Test Case 4: No File Provided (Error)

**Command:**
```bash
curl -X POST http://localhost:3001/api/upload
```

**Expected Response (400 Bad Request):**
```json
{
  "success": false,
  "error": "No image file provided"
}
```

### Test Case 5: Rate Limit Exceeded (Error)

**Command:** (Run 31+ times rapidly)
```bash
for i in {1..35}; do
  echo "Request $i"
  curl -X POST http://localhost:3001/api/upload \
    -F "image=@small-image.jpg"
  sleep 0.1
done
```

**Expected Response (429 Too Many Requests) after 30 requests:**
```json
{
  "success": false,
  "error": "Too many upload requests, please try again later"
}
```

---

## 🧬 Using Other HTTP Clients

### Postman

1. **Create new request**
   - Method: POST
   - URL: `http://localhost:3001/api/upload`

2. **Body Tab**
   - Type: form-data
   - Key: `image`
   - Value: Select your image file
   - Type: File

3. **Send**

### Insomnia

1. **Create new request**
2. **Method:** POST
3. **URL:** `http://localhost:3001/api/upload`
4. **Body:** Form
   - Add form field `image`
   - Type: File
   - Select image

5. **Send**

### Python Requests

```python
import requests

# Simple upload
with open('test-image.jpg', 'rb') as f:
    files = {'image': f}
    response = requests.post('http://localhost:3001/api/upload', files=files)
    print(response.json())

# With error handling
import json

try:
    with open('test-image.jpg', 'rb') as f:
        files = {'image': f}
        response = requests.post(
            'http://localhost:3001/api/upload',
            files=files,
            timeout=30
        )
        
    if response.status_code == 200:
        data = response.json()
        if data['success']:
            prompt = data['data']['prompt']
            print(f"Generated prompt:\n{prompt}")
        else:
            print(f"Error: {data['error']}")
    else:
        print(f"HTTP Error: {response.status_code}")
        
except Exception as e:
    print(f"Request failed: {e}")
```

### JavaScript/Fetch

```javascript
// Simple upload
const file = document.getElementById('imageInput').files[0];
const formData = new FormData();
formData.append('image', file);

fetch('http://localhost:3001/api/upload', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
  if (data.success) {
    console.log('Generated prompt:', data.data.prompt);
  } else {
    console.error('Error:', data.error);
  }
})
.catch(err => console.error('Request failed:', err));

// With async/await
async function uploadImage(file) {
  try {
    const formData = new FormData();
    formData.append('image', file);
    
    const response = await fetch('http://localhost:3001/api/upload', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Upload failed');
    }
    
    return data;
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}
```

---

## 📊 Response Status Codes

| Status | Code | Description |
|--------|------|-------------|
| Success | 200 | Image processed successfully |
| Bad Request | 400 | Invalid request (no file, unsupported format) |
| Payload Too Large | 413 | File exceeds 10MB limit |
| Too Many Requests | 429 | Rate limit exceeded |
| Internal Error | 500 | Server error |
| Service Unavailable | 503 | Vision API error |

---

## 🔐 Security Notes

1. **API Key:** Never expose your OpenAI API key in client-side code
2. **Rate Limiting:** 30 requests per 15 minutes per default
3. **File Validation:** Only JPEG, PNG, WebP, GIF accepted
4. **File Size:** Maximum 10MB per upload
5. **CORS:** Only requests from configured origin accepted
6. **Error Handling:** Generic messages returned (no sensitive info leaked)

---

## 📈 Performance Testing

### Load Testing with Apache Bench

```bash
# Prerequisites: Install Apache Bench (ab command)

# Warm up
ab -n 5 -c 1 http://localhost:3001/api/health

# Health check load test (100 requests, 10 concurrent)
ab -n 100 -c 10 http://localhost:3001/api/health
```

### Load Testing with Locust

```python
# locustfile.py
from locust import HttpUser, task, between
import io

class ImageUploadUser(HttpUser):
    wait_time = between(1, 3)
    
    @task
    def upload_image(self):
        # Create a small test image
        image_data = b'\x89PNG\r\n\x1a\n...'  # PNG binary data
        files = {'image': ('test.png', image_data, 'image/png')}
        self.client.post('/api/upload', files=files)
```

Run with:
```bash
locust -f locustfile.py --host=http://localhost:3001
```

---

## 🐛 Debugging Tips

### Enable Verbose Logging

Backend logs all requests with timestamps:
```
[2024-12-19T10:30:45.123Z] POST /api/upload - 200 (2534ms)
```

### Check Server Health

```bash
curl -v http://localhost:3001/api/health
```

Look for:
- `HTTP/1.1 200 OK` - Server responding
- Response time in milliseconds
- Proper JSON formatting

### Test CORS

```bash
curl -i -X OPTIONS http://localhost:3001/api/upload \
  -H "Origin: http://localhost:3000"
```

Expected headers:
```
Access-Control-Allow-Origin: http://localhost:3000
Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### Check File Upload Size

```bash
# Get file size
ls -lh test-image.jpg

# Check max allowed
echo $((10 * 1024 * 1024)) # 10485760 bytes
```

---

## 📋 Test Checklist

- [ ] Health endpoint responds with 200
- [ ] Small image uploads successfully
- [ ] Prompt generates correctly
- [ ] Large file (>10MB) returns 413 error
- [ ] Invalid format returns 400 error
- [ ] No file provided returns 400 error
- [ ] Rate limit works after 30 requests
- [ ] CORS headers present in response
- [ ] Error responses have proper format
- [ ] Response times are reasonable (<10s)

---

## 🎯 Production Testing Checklist

- [ ] OpenAI API key is valid and has credits
- [ ] Environment variables properly configured
- [ ] SSL/TLS certificate valid for domain
- [ ] CORS origin matches production frontend URL
- [ ] Rate limiting set appropriately
- [ ] Error monitoring configured
- [ ] Logging configured properly
- [ ] Database/storage configured
- [ ] Backup and recovery plan in place
- [ ] Load testing passed

---

**API is ready for testing! 🚀**
