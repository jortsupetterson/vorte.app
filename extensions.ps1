# InstallExtensions.ps1

$extensions = @(
    "bierner.lit-html",
    "christian-kohler.npm-intellisense",
    "dbaeumer.vscode-eslint",
    "ecmel.vscode-html-css",
    "esbenp.prettier-vscode",
    "fill-labs.dependi",
    "ludwigvs.ludwigvs",
    "ms-dotnettools.vscode-dotnet-runtime",
    "ms-vscode.live-server",
    "ms-vscode.powershell",
    "ms-vsliveshare.vsliveshare",
    "pkief.material-icon-theme",
    "ritwickdey.liveserver",
    "tobermory.es6-string-html",
    "visualstudioexptteam.intellicode-api-usage-examples",
    "visualstudioexptteam.vscodeintellicode",
    "vscode-icons-team.vscode-icons"
)

foreach ($ext in $extensions) {
    Write-Host "Asennetaan: $ext"
    code --install-extension $ext
}
