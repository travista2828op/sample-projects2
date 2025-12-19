# Image to Prompt Web Application

A full-stack web application that converts uploaded images into detailed, optimized prompts for image recreation. Perfect for content creators, designers, and anyone working with AI image generation tools.

## Features

- **Drag-and-Drop Upload**: Intuitive image upload interface with drag-and-drop support
- **Real-time Conversion**: Instantly generate detailed prompts from uploaded images
- **AI-Powered Analysis**: Uses OpenAI Vision API to analyze images comprehensively
- **Detailed Prompts**: Generates prompts covering composition, colors, lighting, objects, text, style, mood, perspective, and more
- **Copy-to-Clipboard**: Easily copy generated prompts for use with other tools
- **Responsive Design**: Works seamlessly on desktop and tablet devices
- **Error Handling**: Comprehensive error handling for unsupported formats and API issues
- **Rate Limiting**: Built-in rate limiting to prevent abuse
- **File Validation**: Validates image format and size before processing

## Tech Stack

### Frontend
- **React 18** with TypeScript for component-based architecture
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for responsive, modern styling
- **Modern CSS** with responsive design patterns

### Backend
- **Node.js** with TypeScript for type safety
- **Express.js** for API routing and middleware
- **OpenAI Vision API** for intelligent image analysis
- **Multer** for file upload handling
- **Express Rate Limit** for abuse prevention

## Project Structure

```
image-to-prompt-app/
├── packages/
│   ├── frontend/          # React frontend application
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── ImageUpload.tsx     # Drag-drop upload component
│   │   │   │   ├── PromptDisplay.tsx   # Prompt display with copy button
│   │   │   │   └── ErrorDisplay.tsx    # Error message component
│   │   │   ├── services/
│   │   │   │   └── api.ts              # API client
│   │   │   ├── types/
│   │   │   │   └── index.ts            # TypeScript types
│   │   │   ├── App.tsx                 # Main app component
│   │   │   ├── main.tsx                # Entry point
│   │   │   └── index.css               # Global styles
│   │   ├── vite.config.ts              # Vite configuration
│   │   ├── tsconfig.json               # TypeScript configuration
│   │   ├── tailwind.config.js          # Tailwind configuration
│   │   └── package.json
│   │
│   └── backend/           # Express backend application
│       ├── src/
│       │   ├── routes/
│       │   │   └── upload.ts           # Upload endpoint
│       │   ├── services/
│       │   │   └── visionService.ts    # OpenAI Vision integration
│       │   ├── middleware/
│       │   │   ├── errorHandler.ts     # Error handling middleware
│       │   │   └── requestLogger.ts    # Request logging middleware
│       │   ├── types/
│       │   │   └── index.ts            # TypeScript types
│       │   └── index.ts                # Express app setup
│       ├── tsconfig.json               # TypeScript configuration
│       └── package.json
│
├── package.json           # Root package.json with workspaces
└── README.md             # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- OpenAI API key with GPT-4 Vision access

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd image-to-prompt-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Backend (`.env` in `packages/backend/`):
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   PORT=3001
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   RATE_LIMIT=30
   MAX_FILE_SIZE=10485760
   ```

   Frontend (`.env` in `packages/frontend/`):
   ```
   VITE_API_URL=http://localhost:3001
   ```

### Development

Start both frontend and backend servers in development mode:

```bash
npm run dev
```

This will:
- Start the backend on `http://localhost:3001`
- Start the frontend on `http://localhost:3000`

The frontend will automatically proxy API requests to the backend.

### Building for Production

```bash
npm run build
```

This builds both the frontend and backend for production deployment.

### Type Checking

```bash
npm run type-check
```

## API Documentation

### Image Upload Endpoint

**POST** `/api/upload`

Accepts a multipart form with an image file and returns a generated prompt.

**Request:**
- Content-Type: `multipart/form-data`
- Body: `image` field with image file

**Response (Success):**
```json
{
  "success": true,
  "data": {
    "prompt": "Detailed description of the image...",
    "fileName": "image.jpg",
    "fileSize": 102400
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "Error message describing what went wrong"
}
```

**Supported Formats:**
- JPEG
- PNG
- WebP
- GIF

**Constraints:**
- Maximum file size: 10MB
- Rate limit: 30 requests per 15 minutes

## Features in Detail

### Image Analysis
The AI analyzes images across multiple dimensions:
- Main subject and objects
- Composition and layout
- Colors and color palette
- Lighting and shadows
- Textures and materials
- Style and artistic elements
- Mood and atmosphere
- Perspective and angle
- Text and writing
- Background details
- Size and proportions
- Special effects or unique characteristics

### Error Handling
The application handles:
- Unsupported image formats
- Files exceeding size limits
- API rate limit errors
- Network failures
- Vision API errors

### Rate Limiting
- **Default**: 30 requests per 15 minutes
- **Configurable** via `RATE_LIMIT` environment variable

## Deployment

### Vercel (Recommended for Frontend)
The frontend can be deployed to Vercel with zero configuration.

### Backend Deployment
Deploy the backend to any Node.js hosting:
- Heroku
- Railway
- AWS EC2
- DigitalOcean
- Azure App Service

### Environment Setup
Ensure these environment variables are set in production:
- `OPENAI_API_KEY`: Your OpenAI API key
- `NODE_ENV=production`
- `CORS_ORIGIN`: Your frontend URL
- `PORT`: Server port (default: 3001)

## Configuration Options

### Backend Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `OPENAI_API_KEY` | - | OpenAI API key (required) |
| `PORT` | 3001 | Server port |
| `NODE_ENV` | development | Environment type |
| `CORS_ORIGIN` | http://localhost:3000 | Allowed CORS origin |
| `RATE_LIMIT` | 30 | Requests per 15 minutes |
| `MAX_FILE_SIZE` | 10485760 | Max upload size in bytes |

## Performance

- **Frontend**: Vite provides instant HMR and optimized production builds
- **Image Processing**: Images are processed server-side using Vision API
- **Caching**: Responses are not cached to ensure fresh analysis

## Limitations

- Maximum file size: 10MB
- Rate limited to prevent abuse
- Requires valid OpenAI API key with Vision API access
- Processing time depends on image complexity (typically 2-5 seconds)

## Future Enhancements

- [ ] User authentication and history
- [ ] Saved prompts library
- [ ] Prompt editing and refinement
- [ ] Multiple language support
- [ ] Batch image processing
- [ ] Custom analysis templates
- [ ] Export prompts to various formats
- [ ] Integration with popular image generation APIs

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues, questions, or suggestions, please open an issue on the repository.

## Troubleshooting

### "Invalid API Key" Error
- Verify your OpenAI API key is correct
- Ensure your account has GPT-4 Vision API access
- Check that your API key hasn't expired

### "CORS Error" in Frontend
- Verify `CORS_ORIGIN` environment variable in backend matches your frontend URL
- Ensure backend is running on the correct port
- Check browser console for specific error messages

### "File Too Large" Error
- Maximum file size is 10MB
- Compress your image before uploading
- The `MAX_FILE_SIZE` environment variable can be adjusted if needed

### Slow Processing
- Vision API processing time depends on image complexity
- Large, complex images may take longer to analyze
- Check your internet connection speed
