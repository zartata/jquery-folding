jQuery Folding
==================

Author: Benjamin Delespierre <benjamin.delespierre@gmail.com>

Description
-----------

An easy way to expand and collapse block on click. 
[demo](http://bdelespierre.github.com/jquery-folding/)

Usage
-----

    $('selector').folding(options);
    
    // Manual fold
    $('selector').trigger('fold');
    
    // Manual unfold
    $('selector').trigger('unfold');

Options
-------

* [string] titleClass: The CSS class used to identify block title
* [string] foldedClass: The CSS class used to identify folded blocks
* [string] easing: The folding animation
* [integer] duration: The folding animation duration
* [callback] callback: The callback to call once fold/unfold is done
