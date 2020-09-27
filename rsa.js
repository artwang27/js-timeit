/*
參考數據
p=47，q=71
N=3337
phi=3220
e=3 'pubKey'
d=2147  'pivKey'

msg=105
105^3 mod(3337) = 3023
3023^2147 mod(3337) = 105
原始資料：
105
加密成：
3023
解密後：
105
*/

class RSA{
    constructor(p,q) {
        this.N=p*q;
        let phi=(p-1)*(q-1);    //只有生成功鑰和密鑰時會用到，是暫時的，不需要成為 member
        
        //e，公鑰
        this.pubKey=this.setPublicKey(phi);  
        this.pubKey=101;
        
        //d，私鑰
        this.pivKey=this.find_privateKey(this.pubKey, phi);  
    }
    
    
    //選擇一個公鑰 e
    //選一個與 phi 互質的數，也可自行設定之
    setPublicKey(phi){
        let e=2;
        for(e=2; e<phi; e++ ){
            if(gcd(e, phi)==1){
                return e;
            }//if
        }//for
    }//set


    
    //找出私鑰 d
    //d 是 e 在 mod phi 時的反模數 
    //d*e=1 ，mod(phi)
    find_privateKey(key,phi ){
        let k=1;
        for(k=1; k<phi; k++){
            let n=k*phi+1;
            if(n%key==0){   //n 是 key 的倍數
                let d=n/key;
                return d;
            }            
        }//for
    }//find
    
    
    //計算 data^power2 mod N
    calc(data, power2, N){
        let t=1;
        for(let i=0; i<power2; i++){
            t= (t*data)%N;
        }
    
        print(data+"^"+power2+" mod("+N+") = "+t);
        return t;
    }
    
    //加密
    encryption(data){
        return this.calc(data, this.pubKey, this.N);
    }
    
    //解密
    decrypt(data){
        return this.calc(data, this.pivKey, this.N);
    }
  
}//class


//求公因數
function gcd(a,b){
    if(b==0)
        return a;
    else
        return gcd(b, a%b);
}


/*
//找出私鑰，這是比較慢的解法
    //找出私鑰 d
    //d 是 e 在 mod phi 時的反模數 
    // d*e=1 ，mod(phi)
    find_privateKey(key,phi ){
        let cc=0;
        let d=1;
        for(d=1; d<phi; d++){
            cc++;
            let v=key*d %phi;
            if(v==1) {
                print("共找了 "+cc+" 次");
                return d;
            }
        }
    }
*/