.body{
    @media (min-width:1101px){
        display: flex;
        flex-direction: row;
    }
}

.side-menu {
    width:320px;
    margin:0;
    font-family: 'TT Lakes';
    font-size: 16px;
    font-weight: medium;
    line-height: 24px;
    background-color: $white;
    color: $black;
    position: fixed;
    box-shadow: -2px 0px 4px rgba(69, 79, 126, 0.02), 16px 0px 52px rgba(14, 24, 80, 0.2);
    height: 100%;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 24px;
    z-index: 10;
    transform: translateX(0px);
    transition: transform 0.6s ease;
    @media (min-width:661px){
        position: fixed;
    }
    @media (min-width:1101px){
        box-shadow:none;
    }
}

.content-wrapper{
    @media (min-width:1101px){
        position: relative;
        width: calc(100vw - 320px);
        left: 320px;
    }   
}

.side-menu_hidden{
@media (max-width:1100px){   
transform: translateX(-320px);
transition: transform 0.6s ease;
box-shadow: none;
}
@media (min-width:1101px){
    position: fixed;
    display: block;
}
}


.menuMain{
    margin-bottom: auto;
}

.menuFooter{
    margin-bottom: 32px;
}

