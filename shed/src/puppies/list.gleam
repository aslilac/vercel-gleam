import gleam/http/request.{Request}
import gleam/http/response.{Response}

const puppies = "[{\"name\":\"August\"},{\"name\":\"Dot\"},{\"name\":\"Toby\"}]"

pub fn handler(_: Request(t)) -> Response(String) {
  let body = puppies

  response.new(200)
  |> response.prepend_header("made-with", "Gleam + Vercel")
  |> response.set_body(body)
}
