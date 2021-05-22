# **Intelliarts Test Work**

## **Running Locally**

**Make sure you have Node.js installed.**

```
git clone https://github.com/ivan-hrynkiv/intelliarts # or clone
cd intelliarts
npm install
```

---

## **How to use**

node app.js [command] [arguments]

---

### **Commands**

| Command     | Describe                      | Arguments                      |
| ----------- | ----------------------------- | ------------------------------ |
| addCategory | Add a new Category            | name, price, amount (optional) |
| addItem     | Remove a new Item             | name, amount                   |
| purchase    | Purchase a single snack       | name, date                     |
| list        | List of served categories     |                                |
| clear       | Stop serving empty categories |                                |
| report      | Show earnings by category     | date                           |

---

### **Example**

```
node app.js addCategory "Snack" 4.25 7
node app.js addCategory "Cracker" 7.5
node app.js addItem "Cracker" 1
node app.js addCategory "Mars" 12.99 10
node app.js purchase "Mars" "2021-05-20"
node app.js purchase "Cracker" "2020-05-20"
node app.js list
node app.js clear
node app.js list
node app.js report "2020-05"
node app.js report "2020-10-10"
```
