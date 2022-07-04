// BÀI 1: Số nguyên tăng dần

/*
     Sơ đồ 3 khối

     INPUT: 3 số nguyên bất kỳ

     PROCESS:
       1. Lấy input (integer1,integer2,integer3)
       2. Nếu integer1>integer2 thì chuyển số bé nhất cho integer1
       3. Nếu integer1>integer3 thì chuyển số bé nhất cho integer1
       4. Nếu integer2>integer3 thì chuyển số bé nhì vào integer2
       5. In ra màn hình thứ tự tăng dần là integer1,integer2,integer3

    OUTPUT: thứ tự tăng dần của 3 số đó   


 */

       var integer1 =9;
       var integer2=10;
       var integer3=8;
       var temp;
        if(integer1>integer2)
        {
            temp=integer1;
            integer1=integer2;
            integer2=temp;
        }
        if(integer1>integer3)
        {
            temp=integer1;
            integer1=integer3;
            integer3=temp;
        }
        if(integer2>integer3)
        {
            temp=integer2;
            integer2=integer3;
            integer3=temp;
        }

        console.log("BÀI 1: " + integer1, integer2, integer3);


// BÀI 2: Chào hỏi

/*
     Sơ đồ 3 khối

     INPUT: các thành viên trong Gia đình và người sử dụng

     PROCESS:
       1. Lấy input (B,M,A,E, User)
       2. Nếu người sử dụng là Bố thì xuất ra màn hình "Chào ông chủ"
       3. Nếu người sử dụng là Mẹ thì xuất ra màn hình "Chào bà chủ"
       4. Nếu người sử dụng là Anh trai thì xuất ra màn hình "Chào cậu chủ"
       5. Nếu người sử dụng là Em gái thì xuất ra màn hình "Chào cô chủ"'
       6. In ra màn mình câu chào tương ứng

    OUTPUT: câu chào tương ứng 


 */

    var B="Bố";
    var M="Mẹ";
    var A="Anh trai";
    var E= "Em gái";
    var User=A;
  
     switch (User) {
         case B:
             console.log("BÀI 2: Chào ông chủ");
             break;
         case M:
             console.log("BÀI 2: Chào bà chủ");
             break;
         case A:
             console.log("BÀI 2: Chào cậu chủ");
             break;
         case E:
             console.log("BÀI 2: Chào cô chủ");
             break;    
    
         default:
             console.log("BÀI 2: Chào ai đó.");
             break;
     }



// BÀI 3: Số lẻ số chẵn

/*
     Sơ đồ 3 khối

     INPUT: 3 số nguyên bất kỳ

     PROCESS:
       1. Lấy input (integer1, integer2, integer3)
       2. Tính tổng số chia hết cho 3 => tổng số chẵn
       3. Tổng số lẻ = 3 - tổng số chẵn
       4. In ra màn mình tổng số chẵn và tổng số lẻ
    OUTPUT: tổng số chẵn, tổng số lẻ
 */

    var integer1 = 4;
    var integer2 =5;
    var integer3 =6;

    var totalEven=0;

    if(integer1%2==0)
    {
        totalEven++;
    }
    if(integer2%2==0)
    {
        totalEven++;
    }
    if(integer3%2==0)
    {
        totalEven++;
    }

    console.log("BÀI 3: Tổng số chẵn là: " + totalEven + " Tổng số lẻ là: " + (3-totalEven));



// BÀI 4: Tam giác

/*
     Sơ đồ 3 khối

     INPUT: 3 cạnh của tâm giác

     PROCESS:
       1. Lấy input (a, b, c)
       2. Điều kiện để là tam giác:  a + b <= c || a + c <= b ||  b + c <= a
       3. Xét điều kiện tam giác đều: (a == b) && (b == c)
       4. Nếu không phải tam giác đều thì xét điều kiện tam giác vuông a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c
       5. Nếu không phải là tâm giác đều mà cũng không phải tam giác vuông thì xét ddeieuf kiện tam giác cân a == b || a == c || b == c
       6. Không phải các loại tam giác trên => tma giác thường;
       7. In ra màn hình loại tam giác tương ứng

    OUTPUT: loại tam giác
 */

    var a=3;
    var b=4;
    var c=5;
    if(a + b <= c || a + c <= b ||  b + c <= a)
	{
		console.log("BÀI 4: Tam giac khong hop le. Xin kiem tra lai !");
	}
	else
	{
	    if((a == b) && (b == c))
		{
			console.log("Đều");
		}
		else
		{
			if(a * a + b * b == c * c || a * c + c * c == b * b || b * b + c * c == a * c)
			{
				console.log("BÀI 4: Đây là tam giác Vuông");
			}
			else if(a == b || a == c || b == c)
		    {
			    console.log("BÀI 4: Đây là tam giác Cân");
		    }
			else
			{
				console.log("BÀI 4: Đây là tam giác Thường");
			}
		}
	}


