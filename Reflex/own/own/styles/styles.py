import reflex as rx
from enum import Enum
from .colors import Color as Color
from .colors import TextColor as TextColor
from .fonts import Font, FontWeigth

# Constants
MAX_WIDTH="600px"

# Sizes
class Size(Enum):
    ZERO = "0px !important"
    VERY_SMALL = "0.2em"
    SMALL = "0.5em"
    MEDIUM = "0.8em"
    DEFAULT = "1em"
    LARGE = "1.5em"
    BIG = "2em"
    VERY_BIG = "4em"
    
STYLESHEETS =[
   "https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&dipslay=swap" ,
   "https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap"

]

# styles
BASE_STYLES = {
    # Global styles
    "font_family": Font.DEFAULT.value,
    "font_weight": FontWeigth.LIGHT.value,
    "background_color":Color.BACKGROUND.value,
    
    # Specific styles
    rx.Heading: {
    "color": TextColor.HEADER.value,
    "font_family": Font.TITLE.value,
    "font_weight": FontWeigth.MEDIUM.value,
    
    },
    rx.Button: {
        "width": "100%",
        "height": "100%",
        "padding": Size.SMALL.value,
        "border_radius": Size.DEFAULT.value,
        "color": TextColor.HEADER.value,
        "background_color": Color.CONTENT.value,
        "white_space": "normal",
        "text_align": "left",
        
        "_hover": {
            "background_color": Color.SECONDARY.value
        }
    
    },
    rx.Link:{
        "text_decoration":"none",
        "_hover":{}
    },
    
}

navbar_title_style = dict(
   font_family = Font.LOGO.value,
   font_wight = FontWeigth.MEDIUM.value,
   font_size = Size.LARGE.value,
   color=Color.PRIMARY.value
   
)

title_style = dict(
    width="100%",
    padding_top=Size.DEFAULT.value,
    
)


button_title_style = dict(
    font_family = Font.TITLE.value,
    font_wight = FontWeigth.MEDIUM.value,
    font_size = Size.LARGE.value,
    color = TextColor.HEADER.value
   
)


button_body_style = dict(
    font_family = Font.DEFAULT.value,
    font_wight = FontWeigth.LIGHT.value,
    font_size = Size.DEFAULT.value,
    color=TextColor.BODY.value,
   
)