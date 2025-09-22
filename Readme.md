npm - node pakage manager .... kisi bhi language m uske andar kuch pakage aate h chahe wo cpp ho ya python ese hi ye bhi hme library provide krta h

npx -node pakage executer.... ab jroori nhi h ki hum system m install hi kre hum agar direct execute krna chahte h to ye use hota h isiliye npx ko laaya gya



react ko install krne ke tarike 
1. npx create-react-app myproject
 ye slow hota h kyoki ye bhut saari cheeje de deta h jinki sayad hume jaroorat hi na pde ...
 
 isiliye ab hum vite aur parcel use krne lge h aur isko avoid kr dete h

2. React through vite -  ye phle wale se bhut fast h 

eg-

---Terminal---

@OmBilthere ➜ /workspaces/Learning-React (main) $ npm create vite@latest
Need to install the following packages:
create-vite@7.1.3
Ok to proceed? (y) y
│
◇  Project name:
│  01-vite-react
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Scaffolding project in /workspaces/Learning-React/01-vite-react...
│
└  Done. Now run:

  cd 01-vite-react
  npm install
  npm run dev

------------------------------------------

upar ki process se notice krne wali baat ye h ki first method m to node modules folder install ho rha tha lekin ab wo isme install nhi hota h

Note - kisi bhi tarah se install krke main folder pakage.json hota h jo hume clearity deta h ki kaun dependency install hui h kaun si scripts h aur bhi bhut kuch

next steps-
a. agar folder m nhi ho project ke to "cd foldername" krke andar jao ( cd ..  se ek folder peeche jaate h jabki cd / se root m chle jaate h )

b. ab hmare pass node module folder nhi h to hum use install krenge wo install krna jaroori h 
command - "npm install"

c. "npm run dev" krne se project localhost m show hone lgega 

Note- phli process m js file aati h jabki vite m jsx file aati h dono library h isiliye esa chal rha h nhi to crash ho jata...
