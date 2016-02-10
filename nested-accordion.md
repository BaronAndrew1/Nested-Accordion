What does it do?

  What interactive elements exist?
    So far as I have discovered with a brief look over, there are both hover
    effects and click effects.

  How do you interact with them?
    Hover over or click the element which the effect is attached to.

  What visual effects are produced by interacting?
    On hover, the arrow changes the direction which it points by 45deg on z axis.  
    On click the arrow shifts fully 90deg on the z axis and opens a text box area
    as well as additional nested zones.

How does it do it?

  What existing HTML elements are changed?
    So far as I can tell the only elements that change are the icon text items
    we obtain from fortawesome.

  What new HTML elements are created?
    I cant say I see any "new" elements.  Its more like the original nest is
    hiding the other elements until its clicked.  It is always possible that it
    is indeed creating those items upon being clicked however.

  What css styles are used to produce the effect?
    From what I can tell for the arrow at least: hover, color, and rotateZ are
    the most likely.  Anything else will require more testing and a closer look.
