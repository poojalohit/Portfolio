# Helper script to organize travel photos
# This script will help you move travel photos to the correct location

Write-Host "Travel Photo Organizer" -ForegroundColor Cyan
Write-Host "======================" -ForegroundColor Cyan
Write-Host ""

# Check for images in public folder
$publicImages = Get-ChildItem -Path "public" -File | Where-Object { 
    $_.Extension -match '\.(jpg|jpeg|png|webp)$' -and 
    $_.Name -notmatch '(logo|headshot|skyline|dubai\.jpg|nyc-skyline|vite\.svg|404\.html)' 
}

if ($publicImages.Count -eq 0) {
    Write-Host "No travel photos found in the public folder." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "To add travel photos:" -ForegroundColor Green
    Write-Host "1. Place your travel images in: public/travel/" -ForegroundColor White
    Write-Host "2. Name them descriptively (e.g., dubai-1.jpg, paris-1.jpg)" -ForegroundColor White
    Write-Host "3. Run this script again or update Travel.tsx manually" -ForegroundColor White
} else {
    Write-Host "Found $($publicImages.Count) potential travel photo(s):" -ForegroundColor Green
    $publicImages | ForEach-Object { Write-Host "  - $($_.Name)" -ForegroundColor White }
    Write-Host ""
    Write-Host "These should be moved to: public/travel/" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Current travel folder contents:" -ForegroundColor Cyan
$travelImages = Get-ChildItem -Path "public/travel" -File -ErrorAction SilentlyContinue
if ($travelImages) {
    $travelImages | ForEach-Object { Write-Host "  ✓ $($_.Name)" -ForegroundColor Green }
} else {
    Write-Host "  (empty)" -ForegroundColor Gray
}
