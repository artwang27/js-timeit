function main(){
    let rsa=new RSA(67,71);
    print("公鑰 e= "+ rsa.pubKey);
    print("密鑰 d= "+rsa.pivKey);
        
    let msg=1234;
    
    let c=rsa.encryption(msg);
    //print(rsa.pubKey);
    let m2=rsa.decrypt(c);
    //print(rsa.pivKey);
    
    print("原始資料：");
    print(msg);
    print("加密成：");
    print(c);
    print("解密後：")
    print(m2);
    print("");
    
}


/*
//十進位轉成二進位，之後再轉回十進位，測試用
function decimalToBinary(n){
    if(n==0){
        return 0;
    }
    
    
    d=decimalToBinary(n>>1);
    d *=2;
    
    let bit=n & 01;
    if(bit==1) {
        d +=1;
    }
    return d;

}
*/