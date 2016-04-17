# [DASH](http://dash-hub.herokuapp.com/)
_A React client hub for various modular companions._

### OVERVIEW
Communicates with [Dash API](https://github.com/alanbsmith/dash_api).

The goal for Dash is to build a 'companion hub' of various helpers to manage my day-to-day tasks.

### Companion-Oriented Architecture
Companions are designed to be modular units of functionality. They handle their own actions and state. The goal is for each one to have its own personality and govern a domain of functionality (e.g. Hemingway handles all things article related). Dash becomes more useful with more companions, but never increases has to increase in complexity. This also allows me to iterate on the various companions individually.

### [DASH API](https://github.com/alanbsmith/dash_api)
A central API hub to serve the various companions.

### INITIAL COMPANION
**Hemingway**

A Dash companion for collecting and suggesting interesting reads.

### OTHER POSSIBLE COMPANIONS
* Notes
* Tasks / Reminders
* Forecast
* News
* Music
* Social
* Mail
* Calendar / Events
