#!/usr/bin/env python3
import http.server
import socketserver
import webbrowser
import os
from threading import Timer

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        print(f"[Server] {self.address_string()} - {format % args}")

def open_browser():
    webbrowser.open(f'http://localhost:{PORT}')

if __name__ == '__main__':
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    Handler = MyHTTPRequestHandler
    
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("=" * 60)
        print(f"🚀 Sample Projects 2 Server")
        print("=" * 60)
        print(f"Server running at: http://localhost:{PORT}")
        print(f"Press Ctrl+C to stop the server")
        print("=" * 60)
        
        Timer(1, open_browser).start()
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n🛑 Server stopped.")
