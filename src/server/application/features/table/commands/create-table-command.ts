import {AddTableDTO} from "@/server/application/common/dtos/table";
import {log} from "@/server/application/common/services/logging";
import {dynamicClient} from "@/server/infrastructure/clients/sanity";
import {z} from "zod";
import {createId} from "@paralleldrive/cuid2";

type AddTableCommand = z.infer<typeof AddTableDTO>;

export default async function createTableCommandHandler(
    command: AddTableCommand
) {
    const {name,length,width,price,stock,status,image} = command;
    const table = {
        _id:createId(),
        _type: "table",
        name,
        length,
        width,price,stock,status,
        image
    };
    const publishedCloth = await dynamicClient.create(table);
}
