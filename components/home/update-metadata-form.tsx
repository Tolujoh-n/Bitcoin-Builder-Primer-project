'use client'

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "../ui/textarea"
import { GiMonkey, GiToken } from "react-icons/gi"
import React from "react"
import { useConnect } from "@stacks/connect-react"
import { StacksMainnet } from "@stacks/network";
import { AnchorMode, PostConditionMode, contractPrincipalCV } from "@stacks/transactions";

const UpdateMetadataForm = () => {

    const [selected, setSelected] = React.useState("ft")
    const [contractIdentifier, setContractIdentifier] = React.useState("")
    const { doContractCall } = useConnect();


    function updateMetadata() {
        doContractCall({
            network: new StacksMainnet(),
            anchorMode: AnchorMode.Any,
            contractAddress: "SP1H6HY2ZPSFPZF6HBNADAYKQ2FJN75GHVV95YZQ",
            contractName: "token-metadata-update-notify",
            functionName: selected === 'ft' ? "ft-metadata-update-notify" : "nft-metadata-update-notify",
            functionArgs: [contractPrincipalCV(contractIdentifier.split('.')[0], contractIdentifier.split('.')[1])],
            postConditionMode: PostConditionMode.Deny,
            postConditions: [],
            onFinish: (data) => {
                console.log("onFinish:", data);
                (window as any)
                    .open(
                        `https://explorer.hiro.so/txid/${data.txId}?chain=mainnet`,
                        "_blank"
                    )
                    .focus();
            },
            onCancel: () => {
                console.log("onCancel:", "Transaction was canceled");
            },
        });
    }

    return (
        <>
            <section id="about" className="about">
                <div id="updatemate" className="dark:container">
                    <div
                        className="col-lg-12 text-center order-1 order-lg-2"
                    >
                        <Card>
                            <CardHeader className="space-y-1">
                                <CardTitle className="text-2xl">Update Metadata</CardTitle>
                                <CardDescription>
                                    Update your token metadata to be displayed in wallets
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="grid gap-4">
                                <RadioGroup defaultValue="ft" className="grid grid-cols-2 gap-4" onValueChange={(v) => setSelected(v)}>
                                    <div>
                                        <RadioGroupItem
                                            value="ft"
                                            id="ft"
                                            className="peer sr-only" />
                                        <Label
                                            htmlFor="ft"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <GiToken className="mb-3 h-6 w-6" />
                                            Token
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem value="nft" id="nft" className="peer sr-only" />
                                        <Label
                                            htmlFor="nft"
                                            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                                        >
                                            <GiMonkey className="mb-3 h-6 w-6" />
                                            NFT
                                        </Label>
                                    </div>
                                </RadioGroup>
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-background px-2 text-muted-foreground">
                                            Contract Information
                                        </span>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label>Contract Identifier</Label>
                                    <Input onChange={e => setContractIdentifier(e.target.value)} />
                                </div>
                                {selected === 'nft' && <div className="grid gap-2">
                                    <Label>Token IDs</Label>
                                    <Textarea disabled />
                                </div>}
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={updateMetadata}>Notify Metadata Update</Button>
                            </CardFooter>
                        </Card>
                    </div>

                </div>
            </section>
        </>
    );
};

export default UpdateMetadataForm;
