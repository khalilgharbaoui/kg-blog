---
title: Domain Modeling Diagram!
date: 2016-05-13
tags: Ruby, Ruby on Rails, Domain Moddeling, Diagrams, Gems, Graphviz, railroady, rails-erd
class: blogpost
---

#Domain Modeling Diagram!

![Domain Modeling Diagram](../images/domain-model-diagram.png "Domain Modeling Diagrams")

As i was trying to make a many to many relationship while modeling a new project i'm working on, it crossed my mind to have a visual representation of how it would all look like.
I had already made my mind-map before starting to work on the project but that did not answer the question "How can i visualize existing projects?"



So i decided to do some digging around and it did not take me long to find out 2 of my favorite Gems.

##Railroady & Rails-erd

My personal favorite is Railroady, i just think it has more options out of the box when compaired to Rails-erd.


Here is a small tutorial on how to set it all up in an existing rails project.

###Step 1
install
comming soon...


###Step 2
configure
comming soon...


###Step 3
see
comming soon...


###Now lets automate it all!!

I created this bash script to do all the work for us.

```bash
#!/bin/bash

railroady -a -i -l -m -j -M -t --all-columns --engine-models --show-belongs_to -o _models_diagram.dot
railroady -a -i -l -j -C --engine-controllers -o _controllers_diagram.dot
railroady -a -i -l -j -A -o _acts_as_state_machine.dot
echo "3 Done."
sleep 1
rake erd attributes=foreign_keys,primary_keys,timestamps,inheritance,content disconnected=true filename=_models_diagram2 filetype=dot indirect=true inheritance=true markup=true notation=bachman orientation=horizontal polymorphism=true sort=true
sleep 2
echo "All Done!"
#git add .
#git commit -m "Generated new domain model diagrams! $( date +%d-%m-%Y__%H:%M:%S )"
open _models_diagram.dot
```
