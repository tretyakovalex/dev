```HTML
<form #loginForm="ngForm" (ngSubmit)="Login()">
  <label>Username</label>
  <input type="text" name="username" ngModel><br>
  <label>Password</label>
  <input type="text" name="password" ngModel><br>
  <button type="submit">Send</button>
</form>
```