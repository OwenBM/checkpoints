import { generateId } from "../utils/GenerateId.js"

export class Jot {
  constructor(title, body, CreatedAt, UpdatedAt, id, color) {
    this.title = title
    this.body = body
    this.CreatedAt = CreatedAt
    this.UpdatedAt = UpdatedAt
    this.id = generateId()
    this.color = color || "#282546"

  }

  jotCard() {
    return `
        <div id="left-jot-cards" class="card rounded container-fluid card-width jot-bg text-light m-2 btn" role="button" onclick="app.JotService.setActiveJot('${this.id}')" style="background-color: ${this.color};">
            <div class="row p-2 ">
                <div class="col-6">${this.title}</div>
                <div class="col-6 justify-content-end d-flex"> ${this.CreatedAt}</div>
            </div>
            <div class="opacity-25">${this.body.length > 100 ? this.body.slice(0, 100) + '...' : this.body}</div>
        </div>
        `
  }

  get ActiveJot() {
    return /*html*/ ` 
              <div class="row" style="background-color: ${this.color};">
                <div class="col-6">
                  <div class="p-3">
                    <h3>${this.title}</h3>
                    <div class="pt-2">Created on ${this.CreatedAt}</div>
                    <div>Last edited: ${this.UpdatedAt}</div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="d-flex justify-content-end mt-4 me-5">
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="mt-3 " >
                    <form onsubmit="app.JotService.saveActiveJot()">
                      <button type="submit" class="btn btn-success ms-3 me-2">Save</button>
                      <button type="button" onclick="app.JotController.deleteActiveJot()" class="btn btn-danger">Delete</button>
                      <textarea name="body" id="active-jot" class="m-3 p-3 right-card-format text-light">${this.body}</textarea>
                    </form>
                  </div>
                </div>
              </div>
        `
  }

}