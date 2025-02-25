Write-Host "---LOOPING WITH FOREACH - OBJECT---"
$names = @("aaru","dugu","gugu","pari" )
$names | ForEach-Object { Write-Host "Hello, $_"}

Write-Host " "
Write-Host "---------IF-ELSE CONDITION---------"
$age= Read-Host "Enter your age"
if($age -ge 18){
    Write-Host "You are an adult."
}else {
    Write-Host "You are a minor"
}
