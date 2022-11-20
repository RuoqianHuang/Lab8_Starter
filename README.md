# Lab 8 - Starter
name: Ruoqian Huang (no partner)

1) Where would you fit your automated tests in your Recipe project development pipeline?
   ans: 1. Within a Github action that runs whenever code is pushed 
   explanation: Github action will run the test automatically when we push our changes to Github, saving time and effort.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)
   ans: no

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    ans: no
    explanation: Unit test cannot test how these individual components interact with each other on an application/feature level

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
    ans: yes
    explanation: Debugging on a small scale without many moving parts is much easier than inside of a large moving application and can be executed quickly. This is applicable to test the "max message length" since it is also a "small scale" of code.