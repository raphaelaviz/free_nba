import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'




//Used to make the first loaded page be the Teams Route

export function middleware(request: NextRequest) {

  return NextResponse.redirect(new URL('/teams', request.url))
}
 

export const config = {
  matcher: '/',
}