importClass(android.content.Context);
importClass(android.location.LocationManager);

function autodk(){


auto.waitFor()

if(app.launchApp("今日校园")){
    sleep(500)
    if(text("消息").findOne().parent().parent().click()){
        sleep(800)
        if(id("rc_item_conversation").findOne().click()){
           sleep(500)
        var objectWriting = textContains("未填写").find()
        if(objectWriting.length==0) {
            log("今天似乎没有未填写！")
            exit()
        }
        var writing=objectWriting[objectWriting.length-1]
        if (writing.parent().parent().parent().click()) {
            sleep(2000)
            if(!checkgps()){
                // log(textContains("设置").find())
                var objectWriting =textContains("设置").find()
                var writing=objectWriting[objectWriting.length-1]
                writing.click()
                sleep(100)
                exit()
            }
            
         if (className("android.widget.CheckBox").text(" 确认已认真查看，且填写信息无误").findOne().click()) {
            sleep(2000)
            if (className("android.widget.TextView").text("提交").findOne().click()) {
                sleep(2000)
                if (className("android.widget.Button").text("提交").findOne().click()) {
                    sleep(2000)
                    console.log("好了");
                }
            }   
         }
        }
    }
    }

}
}
function checkgps(){
    if(context.getSystemService(Context.LOCATION_SERVICE)){
             
        var locationManager =context.getSystemService(Context.LOCATION_SERVICE)
        return locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER)
    }
}


