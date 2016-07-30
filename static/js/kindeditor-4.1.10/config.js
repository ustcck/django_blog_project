/**
 * Created by ustcck on 2016/7/27.
 */
KindEditor.ready(function(K) {
                K.create('textarea[name=content]',{
                    width:'800px',
                    height:'200px',
                    uploadJson: '/admin/upload/kindeditor',
                });
        });