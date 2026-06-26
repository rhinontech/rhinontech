import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const src = `C:\\Users\\Lenovo\\.gemini\\antigravity\\brain\\2dddd76a-4370-4c3b-a32c-3d0998d5035d\\hero_background_1782371186766.png`;
    const dest = path.join(process.cwd(), "public", "hero.jpg");
    
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, dest);
      return NextResponse.json({ success: true, message: `Copied successfully to ${dest}` });
    } else {
      return NextResponse.json({ success: false, error: `Source file not found at ${src}` });
    }
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
