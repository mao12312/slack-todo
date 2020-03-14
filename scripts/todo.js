// Description
// A bot that can manage TODO
// Comands:
// botname todo     - create todo
// botname done     - complete todo
// botname del      - delete todo
// botname list     - display todo
// botname doneList - display done list

'use strict';
const todo = require('todo');
module.exports = (robot) => {
    robot.respond(/todo (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.todo(task);
        msg.send(`add: ${task}`);
    });

    robot.respond(/done (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.done(task);
        msg.send(`complete: ${task}`);
    });

    robot.respond(/del (.+)/i, (msg) => {
        const task = msg.match[1].trim();
        todo.del(task);
        msg.send(`add: ${task}`);
    });

    robot.respond(/list/i, (msg) => {
        const list = todo.list();
        return (list.length === 0) ? msg.send(`No TODO`) : msg.send(list.join('\n'));
    });

    robot.respond(/doneList/i, (msg) => {
        const doneList = todo.doneList();
        return (doneList.length === 0) ? msg.send(`No done TODO`) : msg.send(doneList.join('\n'));
    });
};