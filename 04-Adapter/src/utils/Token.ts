export default class Token{
    private _token = "https://jwt.io/#debugger-io?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik1hcmNvcyBWaW5pY2l1cyBCb2F2YSIsImlhdCI6MTUxNjIzOTAyMn0.5SrQQ6AaHLJ8hkwHO9K5YPehkUwtE1VrbY-iFIQvNkg";

    get token(): string{
        return this._token;
    }
}