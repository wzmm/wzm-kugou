/**
 * Created by Administrator on 2017/4/18.
 */

$.ajax({
    url:"data/music_list.json",
    success:function(data){
        var str="";
        $.each(data.data,function(i,val){
            str+="<p><span class='left'>+'val.singers-val.song_name'+</span><span class='right'><img src='images/download_icon_2.png'></span></p>"
        })
        $(".new-list").html(str)
    }
})
