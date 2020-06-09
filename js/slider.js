class Slider{

    constructor(slideIndex){
        this.slideIndex = slideIndex

        this.sliderItems = document.getElementsByClassName(
            'slider__container-item'
        )
        this.controlItems = document.getElementsByClassName(
            'slider__control-item'
        )
        this.dotContainer = document.querySelector('.slider__dots')

        this.initControlElements()
    }

    initControlElements(){
        const { sliderItems, controlItems, changeSlideIndex } = this

        for(let i=0; i < controlItems.length; i++){
            controlItems[i].addEventListener('click', changeSlideIndex.call(this, i) )
        }
        for (let i = 0; i < sliderItems.length; i++) {
            this.renderDot(i)
            
        }
    }

    renderDot(index){
        const { changeSlideIndex } = this
        const dotItem = document.createElement('div')
        dotItem.classList.add('slider__dots-item')

        dotItem.addEventListener(
            'click', 
            changeSlideIndex.call(this, null, index)
            )

        this.dotContainer.appendChild(dotItem)

    }
    
    changeSlideIndex(controlIndex, slideIndex){
        return () => {
            if (slideIndex !== undefined){
                this.slideIndex = slideIndex
            } else{
                switch(controlIndex){
                    case 0:
                        this.slideIndex = this.slideIndex - 1
                        break;
                    case 1:
                        this.slideIndex = this.slideIndex + 1
                        break;
                }
            }
            this.renderSlider()
        }
    }

    renderSlider(){
        const { sliderItems, slideIndex, dotContainer} = this

        for (let i = 0; i < sliderItems.length; i++) {
            sliderItems[i].style.opacity ='0'
        }

        const dotItems = dotContainer.childNodes

        for (let i = 0; i < dotItems.length; i++) {
            dotItems[i].classList.remove('active')
        }
        
        if (slideIndex < 0){
            this.slideIndex = slideItems.length - 1
        }

        if (slideIndex > slideItems.length - 1){
            this.slideIndex = 0
        }

        this.sliderItems[this.slideIndex].style.opacity = '1'
        dotItems[this.slideIndex].classList.add('active')
    }
}