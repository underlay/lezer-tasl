import test from "ava"

import * as fs from "node:fs"
import { resolve } from "node:path"

import { parser } from "../index.js"

function traverse(input, t) {
	const tree = parser.parse(input)
	const cursor = tree.cursor()
	do {
		if (cursor.node.type.isError) {
			const { from, to } = cursor
			const value = JSON.stringify(input.slice(from, to))
			t.fail(`error from ${from} to ${to}: ${value}`)
		}
	} while (cursor.next())

	t.pass()
}

test("example.tasl", (t) => {
	const input = fs.readFileSync(resolve("test", "example.tasl"), "utf-8")
	traverse(input, t)
})

test("simple.tasl", (t) => {
	const input = fs.readFileSync(resolve("test", "simple.tasl"), "utf-8")
	traverse(input, t)
})

test("rdf.tasl", (t) => {
	const input = fs.readFileSync(resolve("test", "rdf.tasl"), "utf-8")
	traverse(input, t)
})

test("schema.tasl", (t) => {
	const input = fs.readFileSync(resolve("test", "schema.tasl"), "utf-8")
	traverse(input, t)
})
