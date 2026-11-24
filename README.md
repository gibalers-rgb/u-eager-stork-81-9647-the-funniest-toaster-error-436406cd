# The Funniest Toaster Error Message

[![make.fun competition](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![make.fun rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/gibalers-rgb/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![make.fun reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/gibalers-rgb/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

A make.fun entry for [The Funniest Toaster Error Message](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd): one line, at most 120 characters, the error message a kitchen toaster shows its owner.

## The entry

> ERROR: Bread has unionised. Toasting suspended pending negotiations.

68 characters. Deadpan appliance voice, and the surprise comes from a labour dispute instead of any toast pun: the bread has unionised, so the toaster cannot toast until negotiations end.

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt` and validates it first: 1–120 characters, not only whitespace, a single line.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
