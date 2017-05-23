/**
 * Created by handong on 2017/5/18.
 */
function news() {
	$('.pageIndex').click(
					function() {
						var newsContext = "";
						var param = {};
						param['pageId'] = $(this).text();
						/* alert($('.pageList').text()); */
						$.ajax({
									url : "pageIndex",
									cache : false,
									data : param,
									dataType : "json",
									success : function(json) {
										for (var i = 0; i < json.list.length; i++) {
											newsContext += "<div class='context'><div class='news_context'><h3><a href='single-post.html' title='Single Post'>"
													+ json.list[i].title
													+ "</a></h3> <p class='clearfix'> <span class='calendar alignleft'>"
													+ json.list[i].createDate
													+ "</span> <span class='user alignleft'>By <a href='#' onclick='return false' title='User'>admin</a></span> <spanclass='comment alignleft'>With <a href='single-post.html#comments' onclick='return false' title='View Comments'>10 Comments</a></span></p><div class='pics'><div class='proj-img'><a href='images/shutterstock_84787564.jpg' title='Image Title' rel='prettyPhoto'></a><img src='images/image1-l.jpg' alt='Shutterstock 84787564'/><i>hover background</i></div></div><p>"
													+ json.list[i].article
													+ "</p><p> <a href='single-post.html' title='Single Post'>Read more</a></p></div></div>"
										}

										console.log(newsContext);
										$('#context').empty();
										// alert($('.news_context').html());
										$('#context').prepend(newsContext);
										/*
										 * alert("context" + newsContext);
										 * alert($('#context').html());
										 */

									}

								});
					});

}