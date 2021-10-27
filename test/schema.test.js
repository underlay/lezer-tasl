import test from "ava"

import * as fs from "node:fs"
import { resolve } from "node:path"

import { parser } from "../index.js"

test("Schema", (t) => {
	const input = fs.readFileSync(resolve("test", "schema.tasl"), "utf-8")
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
})