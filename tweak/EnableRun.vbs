Set WshShell = CreateObject("WScript.Shell")
Var_YN = MsgBox("Aktifkan Menu RUN?", vbYesNo, "Tweaking by oem4R")
If Var_YN = 6 Then

WshShell.RegWrite"HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\NoRun",0,"REG_DWORD"

Else
WshShell.RegWrite"HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\NoRun",1,"REG_DWORD"
Var_Ok = MsgBox("Run Dialog is Disabled!", vbOkOnly, "I-T[e]ChNoLoGy Corp Ltd")

End If