# linz-minitwitter-basic

An example of using Linz, to build a mini-twitter.

Linz is heavily customisable and this example shows how little work is required to get up and running with Linz.

It's also designed as a test project which you should run any new Linz developments you're working on against. A simple, yet effective test case for something generic outside of the usually specific use-case one develops against.

## Setup

This repository provides a complete Vagrant VM for running the software and testing Linz upgrades against. It assumes the following:

- You have the Linz repository cloned (in a folder called  `linz`) alongside this repository on your host.
- You have Vagrant setup (with the VMWare plugin).

The following should get you up and running in no time:

- Clone this repository (make sure the folder you clone into lives alongside the Linz repository).
- Run `vagrant up` on your host to create the VM for the first time.
- Once the VM has been setup, run `vagrant ssh` on your host to gain access to the VM.
- In the guest, run `cd /vagrant/app`.
- In the guest, install the Node.js modules with `npm install`.
- In the guest, to start the Node.js server and example app, run `node server.js` or to view in debug mode `DEBUG=linz:general,linz:error,linz:models,linz:formtools,linz:configs node server.js`.
- You should be able to visit http://192.168.90.3:3700/ in your browser to visit linz-mini-twitter.

## Getting started

Before you can log into Linz, you'll need to bootstrap a user. Visit http://192.168.90.3:3700/bootstrap-users to do so. A user with the username of `test` and password of `password` has been created for you. To log into Linz visit http://192.168.90.3:3700/admin/ in your browser, enter the username and password and hit `Sign-in`.
