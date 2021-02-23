;(function($){

        var intro = {
            init:function(){
                var that = this;
                    that.navFn()
                    that.mainSlideFn()
                    that.noticeFn()
                    that.galleryFn()
                    that.bannerFn()
                    that.familySiteFn()
            },
            navFn:function(){
                //아코디언 메뉴
                //메인메뉴(선택자(selector): .main-btn)에 버튼 이벤트 리스너 
                //마우스 오버(mouseenter) 시 해당 메뉴에 
                //클래스 추가(addclass('on'))하여 스타일을 설정하고 
                //클래스 추가(addclass('on'))하기전 추가된 모든 클래스 (removeClass('on'))삭제

                //그리고 해당 서브메뉴(selector): .sub)에 
                //클래스 추가(addclass ('on'))하여 스타일이 설정되도록 한다
                //클래스 추가(addclass('on'))하기전 추가된 모든 클래스 (removeClass('on'))삭제

                //
                var $mainBtn = $('#nav .main-btn');
                var $sub = $('#nav .sub');
                var $navUl = $('#nav > ul'); //이영역을 떠나면 모든 메뉴 초기화

                    //아코디언 메뉴
                    //메인버튼 이벤트 리스너 
                    $mainBtn.on({
                        mouseenter:function(){
                            $mainBtn.removeClass('on'); /* 버튼 모두 추가된 클래스('on') 삭제 */
                            $(this).addClass('on');

                            $sub.removeClass('on');
                            $(this).next().addClass('on');
                        }
                    });

                    //메인메뉴와 서브메뉴 영역을 떠나면 
                    $navUl.on({
                        mouseleave:function(){
                            $mainBtn.removeClass('on');
                            $sub.removeClass('on');
                        }
                    });

            },
            
            mainSlideFn:function(){
                //슬라이드 이미지 4개 좌우추가 2개 = 총6개   (3 0 1 2 3 0)
                //선택자 : 애니메이션 대상 .slide-wrap
                //선택자 : 이전 슬라이드 버튼 .prev-btn
                //선택자 : 다음 슬라이드 버튼 .next-btn
                //변수 : 카운트 변수 cnt = 0;

                var $slideWrap = $('#section1 .slide-wrap');
                var $prevBtn = $('#section1 .prev-btn');
                var $nextBtn = $('#section1 .next-btn');
                var cnt = 0;


                //1. 메인 슬라이드 함수
                function mainSlideFn(){
                    $slideWrap.stop().animate({left:-800*cnt},600,function(){
                        if(cnt>3) cnt=0;
                        if(cnt<0) cnt=3;
                        $slideWrap.stop().animate({left:-800*cnt},0); //롤링포인트
                    });
                }

                //2-1 다음 슬라이드 카운트 함수

                function nextSlideCountFn(){
                    cnt++;
                    mainSlideFn(); //메인 함수 호출
                }

                //2-2 이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt--;
                    mainSlideFn(); //메인 함수 호출
                }

                //3-1 다음 슬라이드 버튼 클릭 이벤트
                $nextBtn.on({
                    click: function(){
                        //연속해서 클릭하면 버블링 발생
                        //디버깅 : 애니메이션이 동작이 안될 때 클릭하도록
                        //제어문 설정(if 조건문)
                        //not(부정) != 아니다 !== 아니다(논리값까지 비교)
                        //애니메이션이 안될 때를 !$slideWrap.is(':animate)
                        if(!$slideWrap.is(':animated')){
                            nextSlideCountFn();
                        }
                        
                    }                   
                });
                   
                //3-2 이전 슬라이드 버튼 클릭 이벤트
                $prevBtn.on({
                    click: function(){
                        if(!$slideWrap.is(':animated')){
                            nextSlideCountFn();
                        }
                    }
                });



            },
            noticeFn:function(){
              
            },
            galleryFn:function(){
              
            },
            bannerFn:function(){
               
            },
            familySiteFn:function(){
               
            }
        };

        intro.init();

}) (jQuery);