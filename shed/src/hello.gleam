import gleam/http/request.{Request}
import gleam/http/response.{Response}

pub fn handler(_: Request(t)) -> Response(String) {
  let body = "Hello friends!"

  response.new(200)
  |> response.prepend_header("made-with", "Gleam + Vercel")
  |> response.set_body(body)
}
