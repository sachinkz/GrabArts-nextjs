import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Separator } from "../ui/separator"
import { AlertCircle, DollarSign } from "lucide-react"



const invoices = [
    {
        style: "pencil",
        pricing: [
            {
                faces: "1 Face",
                a5: 1600,
                a4: 1800,
                a3: 2000,
            },
            {
                faces: "2 Faces",
                a5: 1600,
                a4: 1800,
                a3: 2000,
            },
            {
                faces: "3 Faces",
                a5: 1600,
                a4: 1800,
                a3: 2000,
            },
            {
                faces: "3+ faces",
                a5: 1600,
                a4: 1800,
                a3: 2000,
            },
        ]
    }
    , {
        style: "color",
        pricing: null,
    }
    , {
        style: "paint",
        pricing: null,
    }
    , {
        style: "digital",
        pricing: null,
    }
]

export function PricingModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="secondary"><DollarSign className="h-4 w-4 mr-2"/> Check Pricing</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] min-w-[600px] max-sm:min-w-[300px] min-h-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-center"> 
                        Pricing For Custom work
                    </DialogTitle>
                </DialogHeader>
                <Tabs>
                    <TabsList className="grid grid-cols-4 mt-5">
                        <TabsTrigger value="pencil">Pencil </TabsTrigger>
                        <TabsTrigger value="color">Color</TabsTrigger>
                        <TabsTrigger value="paint">Painting</TabsTrigger>
                        <TabsTrigger value="digital">Digital</TabsTrigger>
                    </TabsList>
                    {invoices?.map((item) => (
                        item.pricing ? (
                            <TabsContent key={item.style} value={item.style}>
                                <Table>
                                    <TableCaption>Check the price for various paper sizes and Number of faces in your picture</TableCaption>
                                    <TableHeader>
                                        <TableRow className="bg-secondary">
                                            <TableHead className="w-[100px]">No: of Faces </TableHead>
                                            <TableHead>A5</TableHead>
                                            <TableHead>A4</TableHead>
                                            <TableHead>A3</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {item.pricing.map((pr) => (
                                            <TableRow key={pr.faces}>
                                                <TableCell className="font-bold bg-secondary">{pr.faces}</TableCell>
                                                <TableCell>{pr.a5}</TableCell>
                                                <TableCell>{pr.a4}</TableCell>
                                                <TableCell>{pr.a5}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TabsContent>)
                            : (
                                <TabsContent key={item.style} value={item.style}>

                                    <div className="min-h-[295px] gap-2 flex justify-center items-center">
                                        <AlertCircle/>
                                        <p className="font-light text-md">This artist does not make this type of art</p>
                                    </div>
                                </TabsContent>
                            )
                    ))}
                </Tabs>


            </DialogContent>
        </Dialog>
    )
}
