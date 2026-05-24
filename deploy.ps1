# Deploy script for TrustedWear website to Firebase App Hosting
# Usage:
#   .\deploy.ps1                  # Verify + deploy
#   .\deploy.ps1 -SkipBuildCheck  # Skip the local build verification

[CmdletBinding()]
param(
    [switch]$SkipBuildCheck
)

$ErrorActionPreference = "Stop"
$ProjectId  = "trustedwear-website"
$BackendId  = "studio"

Write-Host "==> Firebase project:        $ProjectId" -ForegroundColor Cyan
Write-Host "==> App Hosting backend:     $BackendId" -ForegroundColor Cyan

# 1. Verify firebase CLI is available
if (-not (Get-Command firebase -ErrorAction SilentlyContinue)) {
    Write-Host "firebase CLI not found. Install it with: npm i -g firebase-tools" -ForegroundColor Red
    exit 1
}

# 2. Local build verification (catch breakage before pushing a rollout)
if (-not $SkipBuildCheck) {
    Write-Host "==> Running local build to verify..." -ForegroundColor Cyan
    npm run build
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Local build failed. Fix errors before deploying." -ForegroundColor Red
        exit $LASTEXITCODE
    }
}

# 3. Deploy
Write-Host "==> Deploying to Firebase App Hosting (backend: $BackendId)..." -ForegroundColor Cyan
firebase deploy --only apphosting --project $ProjectId
if ($LASTEXITCODE -ne 0) {
    Write-Host "Deploy failed. If this says you are not authenticated, run: firebase login --reauth" -ForegroundColor Red
    exit $LASTEXITCODE
}

Write-Host "==> Deploy complete." -ForegroundColor Green
Write-Host "    Live URL: https://$BackendId--$ProjectId.us-central1.hosted.app" -ForegroundColor Green
