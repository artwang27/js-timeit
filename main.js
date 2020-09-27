function main(){
    let rsa=new RSA(67,71);
    print("公鑰 e=");
    print(rsa.pubKey);
    print("密鑰 d=");
    print(rsa.pivKey);
    print("");
    
    let msg=1234;
    
    let c=rsa.encryption(msg);
    let m2=rsa.decrypt(c);
    
    print("原始資料：");
    print(msg);
    print("加密成：");
    print(c);
    print("解密後：")
    print(m2);
    
}



