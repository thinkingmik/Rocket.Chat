How to use
===

- First, clone [Rocket.Chat](https://github.com/RocketChat/Rocket.Chat) repo (or your own fork):
```
git clone https://github.com/RocketChat/Rocket.Chat.git
```
- Put the folder `poc-iframe-area` inside of Rocket.Chat `packages` folder:
```
cd Rocket.Chat
wget https://github.com/sampaiodiego/poc-iframe-area/archive/master.zip
unzip master.zip
mv poc-iframe-area-master/ packages/poc-iframe-area
rm master.zip
git checkout -- README.md
```
- Then add the Meteor package to Rocket.Chat app:
```
meteor add poc-iframe-area
```
- It's done! Now you can run Rocket.Chat normally and the package will be loaded:
```
meteor run
```

![image](https://cloud.githubusercontent.com/assets/8591547/16338393/c5250380-39f2-11e6-97e6-b9cf6808241a.png)
