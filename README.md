Code for iGEM Peshawar 2016 Wiki 
=================================

Contains all the code for 2016 iGEM Wiki of Team Peshawar. Team Peshawar 2016
was the first ever iGEM team from Pakistan and won a bronze medal in the Jiant
Jamboree in Boston, MA, USA.

iGEM wiki is a static website. We developed out wiki completely offline and then
pushed it to the iGEM server at the very last moment.

Each page of the website has a .kit extension. The great thing about a .kit file
is that allows one to include other .kit files in it. So this helps in reusing
code such as headers, footers, menus etc. .kit can be complied into HTML with
[CodeKit](https://www.google.com.pk/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&ved=0ahUKEwiF-dChsMfUAhULNo8KHe-mBHkQFgglMAA&url=https%3A%2F%2Fcodekitapp.com%2F&usg=AFQjCNFut7m_ziDGEU2IoIVcfbJ0d5R2dA&sig2=oLZktXcs3Fi-nqUF-L12ew).
All CSS and Javascript were consolidated into single CSS and Javascript file
with CodeKit. These CSS and Javascript files were then linked into each static
HTML page.

Requirements
------------

1.  A Macintosh computer for running CodeKit. CodeKit is not available for
    Windows

2.  CodeKit

3.  You would need to install [Bourbon](Refills - Patterns - Bourbon),
    [Neat](http://neat.bourbon.io/), [Bitters](http://bitters.bourbon.io/), and
    [Refills](http://refills.bourbon.io/components/)

For more information on how to design, please visit out [iGEM Wiki Design
101](http://2016.igem.org/Team:Peshawar/Wiki) page for guidelines.
