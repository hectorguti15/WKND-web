# Script para desplegar WKND-client en GitHub Pages
# Autor: hectorguti15
# Fecha: 2024

Write-Host ">> Iniciando despliegue a GitHub Pages..." -ForegroundColor Cyan

# Variables de entorno
$usuario = "hectorguti15"
$repositorio = "WKND-client"

# Verificar si el repositorio existe
$repoUrl = "https://github.com/$usuario/$repositorio"
try {
    Invoke-WebRequest -Uri $repoUrl -Method Head -ErrorAction SilentlyContinue | Out-Null
    Write-Host "[OK] Repositorio publico $repositorio encontrado" -ForegroundColor Green
} catch {
    Write-Host "[ADVERTENCIA] No se ha encontrado el repositorio publico $repositorio" -ForegroundColor Yellow
    Write-Host "   Por favor, verifica que el repositorio '$repositorio' exista en la cuenta '$usuario'." -ForegroundColor Yellow
    $continuar = Read-Host "Quieres continuar de todos modos? (s/n)"
    if ($continuar -ne "s") {
        Write-Host "[ERROR] Despliegue cancelado" -ForegroundColor Red
        exit
    }
}

# Ejecutar el despliegue
Write-Host ">> Ejecutando despliegue..." -ForegroundColor Cyan
npm run deploy

# Comprobar resultado
if ($LASTEXITCODE -eq 0) {
    Write-Host "[OK] Despliegue completado exitosamente" -ForegroundColor Green
    Write-Host ">> Tu sitio estara disponible en: https://$usuario.github.io/$repositorio/" -ForegroundColor Cyan
    Write-Host "   Es posible que necesites esperar unos minutos para que GitHub Pages actualice el sitio." -ForegroundColor Cyan
} else {
    Write-Host "[ERROR] Hubo un problema durante el despliegue" -ForegroundColor Red
    Write-Host "   Por favor, revisa los mensajes de error anteriores." -ForegroundColor Red
} 