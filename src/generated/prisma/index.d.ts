
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model RateEntry
 * 
 */
export type RateEntry = $Result.DefaultSelection<Prisma.$RateEntryPayload>
/**
 * Model RatePlan
 * 
 */
export type RatePlan = $Result.DefaultSelection<Prisma.$RatePlanPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model InventoryItem
 * 
 */
export type InventoryItem = $Result.DefaultSelection<Prisma.$InventoryItemPayload>
/**
 * Model ChargeCategory
 * 
 */
export type ChargeCategory = $Result.DefaultSelection<Prisma.$ChargeCategoryPayload>
/**
 * Model AppSetting
 * 
 */
export type AppSetting = $Result.DefaultSelection<Prisma.$AppSettingPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>
/**
 * Model Video
 * 
 */
export type Video = $Result.DefaultSelection<Prisma.$VideoPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rateEntry`: Exposes CRUD operations for the **RateEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RateEntries
    * const rateEntries = await prisma.rateEntry.findMany()
    * ```
    */
  get rateEntry(): Prisma.RateEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ratePlan`: Exposes CRUD operations for the **RatePlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RatePlans
    * const ratePlans = await prisma.ratePlan.findMany()
    * ```
    */
  get ratePlan(): Prisma.RatePlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **Expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.ExpenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventoryItem`: Exposes CRUD operations for the **InventoryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InventoryItems
    * const inventoryItems = await prisma.inventoryItem.findMany()
    * ```
    */
  get inventoryItem(): Prisma.InventoryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chargeCategory`: Exposes CRUD operations for the **ChargeCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChargeCategories
    * const chargeCategories = await prisma.chargeCategory.findMany()
    * ```
    */
  get chargeCategory(): Prisma.ChargeCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appSetting`: Exposes CRUD operations for the **AppSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppSettings
    * const appSettings = await prisma.appSetting.findMany()
    * ```
    */
  get appSetting(): Prisma.AppSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.video`: Exposes CRUD operations for the **Video** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Videos
    * const videos = await prisma.video.findMany()
    * ```
    */
  get video(): Prisma.VideoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Property: 'Property',
    Reservation: 'Reservation',
    RateEntry: 'RateEntry',
    RatePlan: 'RatePlan',
    Expense: 'Expense',
    InventoryItem: 'InventoryItem',
    ChargeCategory: 'ChargeCategory',
    AppSetting: 'AppSetting',
    Photo: 'Photo',
    Video: 'Video'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "property" | "reservation" | "rateEntry" | "ratePlan" | "expense" | "inventoryItem" | "chargeCategory" | "appSetting" | "photo" | "video"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
      RateEntry: {
        payload: Prisma.$RateEntryPayload<ExtArgs>
        fields: Prisma.RateEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RateEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RateEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          findFirst: {
            args: Prisma.RateEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RateEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          findMany: {
            args: Prisma.RateEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>[]
          }
          create: {
            args: Prisma.RateEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          createMany: {
            args: Prisma.RateEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RateEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>[]
          }
          delete: {
            args: Prisma.RateEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          update: {
            args: Prisma.RateEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          deleteMany: {
            args: Prisma.RateEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RateEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RateEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>[]
          }
          upsert: {
            args: Prisma.RateEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RateEntryPayload>
          }
          aggregate: {
            args: Prisma.RateEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRateEntry>
          }
          groupBy: {
            args: Prisma.RateEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RateEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RateEntryCountArgs<ExtArgs>
            result: $Utils.Optional<RateEntryCountAggregateOutputType> | number
          }
        }
      }
      RatePlan: {
        payload: Prisma.$RatePlanPayload<ExtArgs>
        fields: Prisma.RatePlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatePlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatePlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          findFirst: {
            args: Prisma.RatePlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatePlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          findMany: {
            args: Prisma.RatePlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          create: {
            args: Prisma.RatePlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          createMany: {
            args: Prisma.RatePlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatePlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          delete: {
            args: Prisma.RatePlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          update: {
            args: Prisma.RatePlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          deleteMany: {
            args: Prisma.RatePlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatePlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatePlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>[]
          }
          upsert: {
            args: Prisma.RatePlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatePlanPayload>
          }
          aggregate: {
            args: Prisma.RatePlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRatePlan>
          }
          groupBy: {
            args: Prisma.RatePlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatePlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatePlanCountArgs<ExtArgs>
            result: $Utils.Optional<RatePlanCountAggregateOutputType> | number
          }
        }
      }
      Expense: {
        payload: Prisma.$ExpensePayload<ExtArgs>
        fields: Prisma.ExpenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExpenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExpenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findFirst: {
            args: Prisma.ExpenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExpenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          findMany: {
            args: Prisma.ExpenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          create: {
            args: Prisma.ExpenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          createMany: {
            args: Prisma.ExpenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExpenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          delete: {
            args: Prisma.ExpenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          update: {
            args: Prisma.ExpenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          deleteMany: {
            args: Prisma.ExpenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExpenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExpenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>[]
          }
          upsert: {
            args: Prisma.ExpenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExpensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.ExpenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExpenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      InventoryItem: {
        payload: Prisma.$InventoryItemPayload<ExtArgs>
        fields: Prisma.InventoryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findFirst: {
            args: Prisma.InventoryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          findMany: {
            args: Prisma.InventoryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          create: {
            args: Prisma.InventoryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          createMany: {
            args: Prisma.InventoryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          delete: {
            args: Prisma.InventoryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          update: {
            args: Prisma.InventoryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          deleteMany: {
            args: Prisma.InventoryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>[]
          }
          upsert: {
            args: Prisma.InventoryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryItemPayload>
          }
          aggregate: {
            args: Prisma.InventoryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventoryItem>
          }
          groupBy: {
            args: Prisma.InventoryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryItemCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryItemCountAggregateOutputType> | number
          }
        }
      }
      ChargeCategory: {
        payload: Prisma.$ChargeCategoryPayload<ExtArgs>
        fields: Prisma.ChargeCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChargeCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChargeCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          findFirst: {
            args: Prisma.ChargeCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChargeCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          findMany: {
            args: Prisma.ChargeCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>[]
          }
          create: {
            args: Prisma.ChargeCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          createMany: {
            args: Prisma.ChargeCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChargeCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>[]
          }
          delete: {
            args: Prisma.ChargeCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          update: {
            args: Prisma.ChargeCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          deleteMany: {
            args: Prisma.ChargeCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChargeCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChargeCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>[]
          }
          upsert: {
            args: Prisma.ChargeCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChargeCategoryPayload>
          }
          aggregate: {
            args: Prisma.ChargeCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChargeCategory>
          }
          groupBy: {
            args: Prisma.ChargeCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChargeCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChargeCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<ChargeCategoryCountAggregateOutputType> | number
          }
        }
      }
      AppSetting: {
        payload: Prisma.$AppSettingPayload<ExtArgs>
        fields: Prisma.AppSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findFirst: {
            args: Prisma.AppSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          findMany: {
            args: Prisma.AppSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          create: {
            args: Prisma.AppSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          createMany: {
            args: Prisma.AppSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AppSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          delete: {
            args: Prisma.AppSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          update: {
            args: Prisma.AppSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          deleteMany: {
            args: Prisma.AppSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AppSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>[]
          }
          upsert: {
            args: Prisma.AppSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppSettingPayload>
          }
          aggregate: {
            args: Prisma.AppSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppSetting>
          }
          groupBy: {
            args: Prisma.AppSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppSettingCountArgs<ExtArgs>
            result: $Utils.Optional<AppSettingCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
      Video: {
        payload: Prisma.$VideoPayload<ExtArgs>
        fields: Prisma.VideoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findFirst: {
            args: Prisma.VideoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          findMany: {
            args: Prisma.VideoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          create: {
            args: Prisma.VideoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          createMany: {
            args: Prisma.VideoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          delete: {
            args: Prisma.VideoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          update: {
            args: Prisma.VideoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          deleteMany: {
            args: Prisma.VideoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>[]
          }
          upsert: {
            args: Prisma.VideoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoPayload>
          }
          aggregate: {
            args: Prisma.VideoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideo>
          }
          groupBy: {
            args: Prisma.VideoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    property?: PropertyOmit
    reservation?: ReservationOmit
    rateEntry?: RateEntryOmit
    ratePlan?: RatePlanOmit
    expense?: ExpenseOmit
    inventoryItem?: InventoryItemOmit
    chargeCategory?: ChargeCategoryOmit
    appSetting?: AppSettingOmit
    photo?: PhotoOmit
    video?: VideoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    userType: string | null
    username: string | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    userType: string | null
    username: string | null
    name: string | null
    lastName: string | null
    phone: string | null
    email: string | null
    passwordHash: string | null
    enabled: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userType: number
    username: number
    name: number
    lastName: number
    phone: number
    email: number
    passwordHash: number
    enabled: number
    extra: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userType?: true
    username?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    passwordHash?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userType?: true
    username?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    passwordHash?: true
    enabled?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userType?: true
    username?: true
    name?: true
    lastName?: true
    phone?: true
    email?: true
    passwordHash?: true
    enabled?: true
    extra?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    userType: string
    username: string
    name: string
    lastName: string
    phone: string
    email: string
    passwordHash: string
    enabled: boolean
    extra: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    username?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    enabled?: boolean
    extra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    username?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    enabled?: boolean
    extra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userType?: boolean
    username?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    enabled?: boolean
    extra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userType?: boolean
    username?: boolean
    name?: boolean
    lastName?: boolean
    phone?: boolean
    email?: boolean
    passwordHash?: boolean
    enabled?: boolean
    extra?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userType" | "username" | "name" | "lastName" | "phone" | "email" | "passwordHash" | "enabled" | "extra" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      userType: string
      username: string
      name: string
      lastName: string
      phone: string
      email: string
      passwordHash: string
      enabled: boolean
      extra: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly userType: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly enabled: FieldRef<"User", 'Boolean'>
    readonly extra: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
  }

  export type PropertySumAggregateOutputType = {
    id: bigint | null
  }

  export type PropertyMinAggregateOutputType = {
    id: bigint | null
    category: string | null
    name: string | null
    zona: string | null
    address: string | null
    number: string | null
    floor: string | null
    apartment: string | null
    description: string | null
    bedrooms: string | null
    bathrooms: string | null
    maxGuests: string | null
    propertyType: string | null
    ambientes: string | null
    checkInFrom: string | null
    checkInTo: string | null
    checkOutFrom: string | null
    checkOutTo: string | null
    mtsDelMar: string | null
    mascotasCantidad: string | null
    chargesCurrency: string | null
    wifiNetwork: string | null
    wifiPassword: string | null
    keysCount: string | null
    electronicKey: boolean | null
    keyCode: string | null
    bookingId: string | null
    airbnbId: string | null
    enabled: boolean | null
    eliminado: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: bigint | null
    category: string | null
    name: string | null
    zona: string | null
    address: string | null
    number: string | null
    floor: string | null
    apartment: string | null
    description: string | null
    bedrooms: string | null
    bathrooms: string | null
    maxGuests: string | null
    propertyType: string | null
    ambientes: string | null
    checkInFrom: string | null
    checkInTo: string | null
    checkOutFrom: string | null
    checkOutTo: string | null
    mtsDelMar: string | null
    mascotasCantidad: string | null
    chargesCurrency: string | null
    wifiNetwork: string | null
    wifiPassword: string | null
    keysCount: string | null
    electronicKey: boolean | null
    keyCode: string | null
    bookingId: string | null
    airbnbId: string | null
    enabled: boolean | null
    eliminado: boolean | null
    createdAt: Date | null
    deletedAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    category: number
    name: number
    zona: number
    address: number
    number: number
    floor: number
    apartment: number
    description: number
    bedrooms: number
    bathrooms: number
    maxGuests: number
    propertyType: number
    ambientes: number
    checkInFrom: number
    checkInTo: number
    checkOutFrom: number
    checkOutTo: number
    beds: number
    amenities: number
    mtsDelMar: number
    mascotasCantidad: number
    chargesCurrency: number
    charges: number
    wifiNetwork: number
    wifiPassword: number
    keysCount: number
    electronicKey: number
    keyCode: number
    bookingId: number
    airbnbId: number
    bank: number
    photos: number
    enabled: number
    eliminado: number
    createdAt: number
    deletedAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    category?: true
    name?: true
    zona?: true
    address?: true
    number?: true
    floor?: true
    apartment?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    propertyType?: true
    ambientes?: true
    checkInFrom?: true
    checkInTo?: true
    checkOutFrom?: true
    checkOutTo?: true
    mtsDelMar?: true
    mascotasCantidad?: true
    chargesCurrency?: true
    wifiNetwork?: true
    wifiPassword?: true
    keysCount?: true
    electronicKey?: true
    keyCode?: true
    bookingId?: true
    airbnbId?: true
    enabled?: true
    eliminado?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    category?: true
    name?: true
    zona?: true
    address?: true
    number?: true
    floor?: true
    apartment?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    propertyType?: true
    ambientes?: true
    checkInFrom?: true
    checkInTo?: true
    checkOutFrom?: true
    checkOutTo?: true
    mtsDelMar?: true
    mascotasCantidad?: true
    chargesCurrency?: true
    wifiNetwork?: true
    wifiPassword?: true
    keysCount?: true
    electronicKey?: true
    keyCode?: true
    bookingId?: true
    airbnbId?: true
    enabled?: true
    eliminado?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    category?: true
    name?: true
    zona?: true
    address?: true
    number?: true
    floor?: true
    apartment?: true
    description?: true
    bedrooms?: true
    bathrooms?: true
    maxGuests?: true
    propertyType?: true
    ambientes?: true
    checkInFrom?: true
    checkInTo?: true
    checkOutFrom?: true
    checkOutTo?: true
    beds?: true
    amenities?: true
    mtsDelMar?: true
    mascotasCantidad?: true
    chargesCurrency?: true
    charges?: true
    wifiNetwork?: true
    wifiPassword?: true
    keysCount?: true
    electronicKey?: true
    keyCode?: true
    bookingId?: true
    airbnbId?: true
    bank?: true
    photos?: true
    enabled?: true
    eliminado?: true
    createdAt?: true
    deletedAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: bigint
    category: string
    name: string
    zona: string
    address: string
    number: string
    floor: string
    apartment: string
    description: string
    bedrooms: string
    bathrooms: string
    maxGuests: string
    propertyType: string
    ambientes: string
    checkInFrom: string
    checkInTo: string
    checkOutFrom: string
    checkOutTo: string
    beds: JsonValue
    amenities: JsonValue
    mtsDelMar: string
    mascotasCantidad: string
    chargesCurrency: string
    charges: JsonValue
    wifiNetwork: string
    wifiPassword: string
    keysCount: string
    electronicKey: boolean
    keyCode: string
    bookingId: string
    airbnbId: string
    bank: JsonValue
    photos: JsonValue
    enabled: boolean
    eliminado: boolean
    createdAt: Date
    deletedAt: Date | null
    updatedAt: Date
    extra: JsonValue | null
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    zona?: boolean
    address?: boolean
    number?: boolean
    floor?: boolean
    apartment?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    propertyType?: boolean
    ambientes?: boolean
    checkInFrom?: boolean
    checkInTo?: boolean
    checkOutFrom?: boolean
    checkOutTo?: boolean
    beds?: boolean
    amenities?: boolean
    mtsDelMar?: boolean
    mascotasCantidad?: boolean
    chargesCurrency?: boolean
    charges?: boolean
    wifiNetwork?: boolean
    wifiPassword?: boolean
    keysCount?: boolean
    electronicKey?: boolean
    keyCode?: boolean
    bookingId?: boolean
    airbnbId?: boolean
    bank?: boolean
    photos?: boolean
    enabled?: boolean
    eliminado?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    zona?: boolean
    address?: boolean
    number?: boolean
    floor?: boolean
    apartment?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    propertyType?: boolean
    ambientes?: boolean
    checkInFrom?: boolean
    checkInTo?: boolean
    checkOutFrom?: boolean
    checkOutTo?: boolean
    beds?: boolean
    amenities?: boolean
    mtsDelMar?: boolean
    mascotasCantidad?: boolean
    chargesCurrency?: boolean
    charges?: boolean
    wifiNetwork?: boolean
    wifiPassword?: boolean
    keysCount?: boolean
    electronicKey?: boolean
    keyCode?: boolean
    bookingId?: boolean
    airbnbId?: boolean
    bank?: boolean
    photos?: boolean
    enabled?: boolean
    eliminado?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category?: boolean
    name?: boolean
    zona?: boolean
    address?: boolean
    number?: boolean
    floor?: boolean
    apartment?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    propertyType?: boolean
    ambientes?: boolean
    checkInFrom?: boolean
    checkInTo?: boolean
    checkOutFrom?: boolean
    checkOutTo?: boolean
    beds?: boolean
    amenities?: boolean
    mtsDelMar?: boolean
    mascotasCantidad?: boolean
    chargesCurrency?: boolean
    charges?: boolean
    wifiNetwork?: boolean
    wifiPassword?: boolean
    keysCount?: boolean
    electronicKey?: boolean
    keyCode?: boolean
    bookingId?: boolean
    airbnbId?: boolean
    bank?: boolean
    photos?: boolean
    enabled?: boolean
    eliminado?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["property"]>

  export type PropertySelectScalar = {
    id?: boolean
    category?: boolean
    name?: boolean
    zona?: boolean
    address?: boolean
    number?: boolean
    floor?: boolean
    apartment?: boolean
    description?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    maxGuests?: boolean
    propertyType?: boolean
    ambientes?: boolean
    checkInFrom?: boolean
    checkInTo?: boolean
    checkOutFrom?: boolean
    checkOutTo?: boolean
    beds?: boolean
    amenities?: boolean
    mtsDelMar?: boolean
    mascotasCantidad?: boolean
    chargesCurrency?: boolean
    charges?: boolean
    wifiNetwork?: boolean
    wifiPassword?: boolean
    keysCount?: boolean
    electronicKey?: boolean
    keyCode?: boolean
    bookingId?: boolean
    airbnbId?: boolean
    bank?: boolean
    photos?: boolean
    enabled?: boolean
    eliminado?: boolean
    createdAt?: boolean
    deletedAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category" | "name" | "zona" | "address" | "number" | "floor" | "apartment" | "description" | "bedrooms" | "bathrooms" | "maxGuests" | "propertyType" | "ambientes" | "checkInFrom" | "checkInTo" | "checkOutFrom" | "checkOutTo" | "beds" | "amenities" | "mtsDelMar" | "mascotasCantidad" | "chargesCurrency" | "charges" | "wifiNetwork" | "wifiPassword" | "keysCount" | "electronicKey" | "keyCode" | "bookingId" | "airbnbId" | "bank" | "photos" | "enabled" | "eliminado" | "createdAt" | "deletedAt" | "updatedAt" | "extra", ExtArgs["result"]["property"]>

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      category: string
      name: string
      zona: string
      address: string
      number: string
      floor: string
      apartment: string
      description: string
      bedrooms: string
      bathrooms: string
      maxGuests: string
      propertyType: string
      ambientes: string
      checkInFrom: string
      checkInTo: string
      checkOutFrom: string
      checkOutTo: string
      beds: Prisma.JsonValue
      amenities: Prisma.JsonValue
      mtsDelMar: string
      mascotasCantidad: string
      chargesCurrency: string
      charges: Prisma.JsonValue
      wifiNetwork: string
      wifiPassword: string
      keysCount: string
      electronicKey: boolean
      keyCode: string
      bookingId: string
      airbnbId: string
      bank: Prisma.JsonValue
      photos: Prisma.JsonValue
      enabled: boolean
      eliminado: boolean
      createdAt: Date
      deletedAt: Date | null
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertyCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertyCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertyUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertyWithIdOnly = await prisma.property.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertyUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'BigInt'>
    readonly category: FieldRef<"Property", 'String'>
    readonly name: FieldRef<"Property", 'String'>
    readonly zona: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly number: FieldRef<"Property", 'String'>
    readonly floor: FieldRef<"Property", 'String'>
    readonly apartment: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly bedrooms: FieldRef<"Property", 'String'>
    readonly bathrooms: FieldRef<"Property", 'String'>
    readonly maxGuests: FieldRef<"Property", 'String'>
    readonly propertyType: FieldRef<"Property", 'String'>
    readonly ambientes: FieldRef<"Property", 'String'>
    readonly checkInFrom: FieldRef<"Property", 'String'>
    readonly checkInTo: FieldRef<"Property", 'String'>
    readonly checkOutFrom: FieldRef<"Property", 'String'>
    readonly checkOutTo: FieldRef<"Property", 'String'>
    readonly beds: FieldRef<"Property", 'Json'>
    readonly amenities: FieldRef<"Property", 'Json'>
    readonly mtsDelMar: FieldRef<"Property", 'String'>
    readonly mascotasCantidad: FieldRef<"Property", 'String'>
    readonly chargesCurrency: FieldRef<"Property", 'String'>
    readonly charges: FieldRef<"Property", 'Json'>
    readonly wifiNetwork: FieldRef<"Property", 'String'>
    readonly wifiPassword: FieldRef<"Property", 'String'>
    readonly keysCount: FieldRef<"Property", 'String'>
    readonly electronicKey: FieldRef<"Property", 'Boolean'>
    readonly keyCode: FieldRef<"Property", 'String'>
    readonly bookingId: FieldRef<"Property", 'String'>
    readonly airbnbId: FieldRef<"Property", 'String'>
    readonly bank: FieldRef<"Property", 'Json'>
    readonly photos: FieldRef<"Property", 'Json'>
    readonly enabled: FieldRef<"Property", 'Boolean'>
    readonly eliminado: FieldRef<"Property", 'Boolean'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly deletedAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
    readonly extra: FieldRef<"Property", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
  }

  /**
   * Property createManyAndReturn
   */
  export type PropertyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property updateManyAndReturn
   */
  export type PropertyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    guests: number | null
    nights: number | null
    valorNoches: number | null
    mascotasQty: number | null
    mascotasValue: number | null
    cocheraValue: number | null
    descuento: number | null
    totalNeto: number | null
    cargos: number | null
    totalBruto: number | null
    senaPct: number | null
    senaValue: number | null
    restante: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: bigint | null
    guests: number | null
    nights: number | null
    valorNoches: number | null
    mascotasQty: number | null
    mascotasValue: number | null
    cocheraValue: number | null
    descuento: number | null
    totalNeto: number | null
    cargos: number | null
    totalBruto: number | null
    senaPct: number | null
    senaValue: number | null
    restante: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: bigint | null
    status: string | null
    propertyId: string | null
    propertyName: string | null
    checkInDate: string | null
    checkOutDate: string | null
    checkInTime: string | null
    checkOutTime: string | null
    guests: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    docType: string | null
    dni: string | null
    hasAttachment: boolean | null
    attachmentName: string | null
    dniException: boolean | null
    senaException: boolean | null
    hasPaymentProof: boolean | null
    paymentProofName: string | null
    hasVideo: boolean | null
    videoName: string | null
    videoUrl: string | null
    observaciones: string | null
    currency: string | null
    channel: string | null
    condition: string | null
    nights: number | null
    valorNoches: number | null
    mascotasEnabled: boolean | null
    mascotasQty: number | null
    mascotasValue: number | null
    cocheraEnabled: boolean | null
    cocheraId: string | null
    cocheraValue: number | null
    descuento: number | null
    totalNeto: number | null
    cargos: number | null
    totalBruto: number | null
    senaPct: number | null
    senaValue: number | null
    restante: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: bigint | null
    status: string | null
    propertyId: string | null
    propertyName: string | null
    checkInDate: string | null
    checkOutDate: string | null
    checkInTime: string | null
    checkOutTime: string | null
    guests: number | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    docType: string | null
    dni: string | null
    hasAttachment: boolean | null
    attachmentName: string | null
    dniException: boolean | null
    senaException: boolean | null
    hasPaymentProof: boolean | null
    paymentProofName: string | null
    hasVideo: boolean | null
    videoName: string | null
    videoUrl: string | null
    observaciones: string | null
    currency: string | null
    channel: string | null
    condition: string | null
    nights: number | null
    valorNoches: number | null
    mascotasEnabled: boolean | null
    mascotasQty: number | null
    mascotasValue: number | null
    cocheraEnabled: boolean | null
    cocheraId: string | null
    cocheraValue: number | null
    descuento: number | null
    totalNeto: number | null
    cargos: number | null
    totalBruto: number | null
    senaPct: number | null
    senaValue: number | null
    restante: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    status: number
    propertyId: number
    propertyName: number
    checkInDate: number
    checkOutDate: number
    checkInTime: number
    checkOutTime: number
    guests: number
    firstName: number
    lastName: number
    phone: number
    docType: number
    dni: number
    hasAttachment: number
    attachmentName: number
    dniException: number
    senaException: number
    hasPaymentProof: number
    paymentProofName: number
    hasVideo: number
    videoName: number
    videoUrl: number
    observaciones: number
    currency: number
    channel: number
    condition: number
    nights: number
    valorNoches: number
    mascotasEnabled: number
    mascotasQty: number
    mascotasValue: number
    cocheraEnabled: number
    cocheraId: number
    cocheraValue: number
    descuento: number
    totalNeto: number
    cargos: number
    totalBruto: number
    senaPct: number
    senaValue: number
    restante: number
    createdAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    guests?: true
    nights?: true
    valorNoches?: true
    mascotasQty?: true
    mascotasValue?: true
    cocheraValue?: true
    descuento?: true
    totalNeto?: true
    cargos?: true
    totalBruto?: true
    senaPct?: true
    senaValue?: true
    restante?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    guests?: true
    nights?: true
    valorNoches?: true
    mascotasQty?: true
    mascotasValue?: true
    cocheraValue?: true
    descuento?: true
    totalNeto?: true
    cargos?: true
    totalBruto?: true
    senaPct?: true
    senaValue?: true
    restante?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    status?: true
    propertyId?: true
    propertyName?: true
    checkInDate?: true
    checkOutDate?: true
    checkInTime?: true
    checkOutTime?: true
    guests?: true
    firstName?: true
    lastName?: true
    phone?: true
    docType?: true
    dni?: true
    hasAttachment?: true
    attachmentName?: true
    dniException?: true
    senaException?: true
    hasPaymentProof?: true
    paymentProofName?: true
    hasVideo?: true
    videoName?: true
    videoUrl?: true
    observaciones?: true
    currency?: true
    channel?: true
    condition?: true
    nights?: true
    valorNoches?: true
    mascotasEnabled?: true
    mascotasQty?: true
    mascotasValue?: true
    cocheraEnabled?: true
    cocheraId?: true
    cocheraValue?: true
    descuento?: true
    totalNeto?: true
    cargos?: true
    totalBruto?: true
    senaPct?: true
    senaValue?: true
    restante?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    status?: true
    propertyId?: true
    propertyName?: true
    checkInDate?: true
    checkOutDate?: true
    checkInTime?: true
    checkOutTime?: true
    guests?: true
    firstName?: true
    lastName?: true
    phone?: true
    docType?: true
    dni?: true
    hasAttachment?: true
    attachmentName?: true
    dniException?: true
    senaException?: true
    hasPaymentProof?: true
    paymentProofName?: true
    hasVideo?: true
    videoName?: true
    videoUrl?: true
    observaciones?: true
    currency?: true
    channel?: true
    condition?: true
    nights?: true
    valorNoches?: true
    mascotasEnabled?: true
    mascotasQty?: true
    mascotasValue?: true
    cocheraEnabled?: true
    cocheraId?: true
    cocheraValue?: true
    descuento?: true
    totalNeto?: true
    cargos?: true
    totalBruto?: true
    senaPct?: true
    senaValue?: true
    restante?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    status?: true
    propertyId?: true
    propertyName?: true
    checkInDate?: true
    checkOutDate?: true
    checkInTime?: true
    checkOutTime?: true
    guests?: true
    firstName?: true
    lastName?: true
    phone?: true
    docType?: true
    dni?: true
    hasAttachment?: true
    attachmentName?: true
    dniException?: true
    senaException?: true
    hasPaymentProof?: true
    paymentProofName?: true
    hasVideo?: true
    videoName?: true
    videoUrl?: true
    observaciones?: true
    currency?: true
    channel?: true
    condition?: true
    nights?: true
    valorNoches?: true
    mascotasEnabled?: true
    mascotasQty?: true
    mascotasValue?: true
    cocheraEnabled?: true
    cocheraId?: true
    cocheraValue?: true
    descuento?: true
    totalNeto?: true
    cargos?: true
    totalBruto?: true
    senaPct?: true
    senaValue?: true
    restante?: true
    createdAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: bigint
    status: string
    propertyId: string
    propertyName: string
    checkInDate: string
    checkOutDate: string
    checkInTime: string
    checkOutTime: string
    guests: number
    firstName: string
    lastName: string
    phone: string
    docType: string
    dni: string
    hasAttachment: boolean
    attachmentName: string
    dniException: boolean
    senaException: boolean
    hasPaymentProof: boolean
    paymentProofName: string
    hasVideo: boolean
    videoName: string
    videoUrl: string
    observaciones: string
    currency: string
    channel: string
    condition: string
    nights: number
    valorNoches: number
    mascotasEnabled: boolean
    mascotasQty: number
    mascotasValue: number
    cocheraEnabled: boolean
    cocheraId: string
    cocheraValue: number
    descuento: number
    totalNeto: number
    cargos: number
    totalBruto: number
    senaPct: number
    senaValue: number
    restante: number
    createdAt: Date
    updatedAt: Date
    extra: JsonValue | null
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    propertyId?: boolean
    propertyName?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    guests?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    docType?: boolean
    dni?: boolean
    hasAttachment?: boolean
    attachmentName?: boolean
    dniException?: boolean
    senaException?: boolean
    hasPaymentProof?: boolean
    paymentProofName?: boolean
    hasVideo?: boolean
    videoName?: boolean
    videoUrl?: boolean
    observaciones?: boolean
    currency?: boolean
    channel?: boolean
    condition?: boolean
    nights?: boolean
    valorNoches?: boolean
    mascotasEnabled?: boolean
    mascotasQty?: boolean
    mascotasValue?: boolean
    cocheraEnabled?: boolean
    cocheraId?: boolean
    cocheraValue?: boolean
    descuento?: boolean
    totalNeto?: boolean
    cargos?: boolean
    totalBruto?: boolean
    senaPct?: boolean
    senaValue?: boolean
    restante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    propertyId?: boolean
    propertyName?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    guests?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    docType?: boolean
    dni?: boolean
    hasAttachment?: boolean
    attachmentName?: boolean
    dniException?: boolean
    senaException?: boolean
    hasPaymentProof?: boolean
    paymentProofName?: boolean
    hasVideo?: boolean
    videoName?: boolean
    videoUrl?: boolean
    observaciones?: boolean
    currency?: boolean
    channel?: boolean
    condition?: boolean
    nights?: boolean
    valorNoches?: boolean
    mascotasEnabled?: boolean
    mascotasQty?: boolean
    mascotasValue?: boolean
    cocheraEnabled?: boolean
    cocheraId?: boolean
    cocheraValue?: boolean
    descuento?: boolean
    totalNeto?: boolean
    cargos?: boolean
    totalBruto?: boolean
    senaPct?: boolean
    senaValue?: boolean
    restante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    propertyId?: boolean
    propertyName?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    guests?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    docType?: boolean
    dni?: boolean
    hasAttachment?: boolean
    attachmentName?: boolean
    dniException?: boolean
    senaException?: boolean
    hasPaymentProof?: boolean
    paymentProofName?: boolean
    hasVideo?: boolean
    videoName?: boolean
    videoUrl?: boolean
    observaciones?: boolean
    currency?: boolean
    channel?: boolean
    condition?: boolean
    nights?: boolean
    valorNoches?: boolean
    mascotasEnabled?: boolean
    mascotasQty?: boolean
    mascotasValue?: boolean
    cocheraEnabled?: boolean
    cocheraId?: boolean
    cocheraValue?: boolean
    descuento?: boolean
    totalNeto?: boolean
    cargos?: boolean
    totalBruto?: boolean
    senaPct?: boolean
    senaValue?: boolean
    restante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    status?: boolean
    propertyId?: boolean
    propertyName?: boolean
    checkInDate?: boolean
    checkOutDate?: boolean
    checkInTime?: boolean
    checkOutTime?: boolean
    guests?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    docType?: boolean
    dni?: boolean
    hasAttachment?: boolean
    attachmentName?: boolean
    dniException?: boolean
    senaException?: boolean
    hasPaymentProof?: boolean
    paymentProofName?: boolean
    hasVideo?: boolean
    videoName?: boolean
    videoUrl?: boolean
    observaciones?: boolean
    currency?: boolean
    channel?: boolean
    condition?: boolean
    nights?: boolean
    valorNoches?: boolean
    mascotasEnabled?: boolean
    mascotasQty?: boolean
    mascotasValue?: boolean
    cocheraEnabled?: boolean
    cocheraId?: boolean
    cocheraValue?: boolean
    descuento?: boolean
    totalNeto?: boolean
    cargos?: boolean
    totalBruto?: boolean
    senaPct?: boolean
    senaValue?: boolean
    restante?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "propertyId" | "propertyName" | "checkInDate" | "checkOutDate" | "checkInTime" | "checkOutTime" | "guests" | "firstName" | "lastName" | "phone" | "docType" | "dni" | "hasAttachment" | "attachmentName" | "dniException" | "senaException" | "hasPaymentProof" | "paymentProofName" | "hasVideo" | "videoName" | "videoUrl" | "observaciones" | "currency" | "channel" | "condition" | "nights" | "valorNoches" | "mascotasEnabled" | "mascotasQty" | "mascotasValue" | "cocheraEnabled" | "cocheraId" | "cocheraValue" | "descuento" | "totalNeto" | "cargos" | "totalBruto" | "senaPct" | "senaValue" | "restante" | "createdAt" | "updatedAt" | "extra", ExtArgs["result"]["reservation"]>

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      status: string
      propertyId: string
      propertyName: string
      checkInDate: string
      checkOutDate: string
      checkInTime: string
      checkOutTime: string
      guests: number
      firstName: string
      lastName: string
      phone: string
      docType: string
      dni: string
      hasAttachment: boolean
      attachmentName: string
      dniException: boolean
      senaException: boolean
      hasPaymentProof: boolean
      paymentProofName: string
      hasVideo: boolean
      videoName: string
      videoUrl: string
      observaciones: string
      currency: string
      channel: string
      condition: string
      nights: number
      valorNoches: number
      mascotasEnabled: boolean
      mascotasQty: number
      mascotasValue: number
      cocheraEnabled: boolean
      cocheraId: string
      cocheraValue: number
      descuento: number
      totalNeto: number
      cargos: number
      totalBruto: number
      senaPct: number
      senaValue: number
      restante: number
      createdAt: Date
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'BigInt'>
    readonly status: FieldRef<"Reservation", 'String'>
    readonly propertyId: FieldRef<"Reservation", 'String'>
    readonly propertyName: FieldRef<"Reservation", 'String'>
    readonly checkInDate: FieldRef<"Reservation", 'String'>
    readonly checkOutDate: FieldRef<"Reservation", 'String'>
    readonly checkInTime: FieldRef<"Reservation", 'String'>
    readonly checkOutTime: FieldRef<"Reservation", 'String'>
    readonly guests: FieldRef<"Reservation", 'Int'>
    readonly firstName: FieldRef<"Reservation", 'String'>
    readonly lastName: FieldRef<"Reservation", 'String'>
    readonly phone: FieldRef<"Reservation", 'String'>
    readonly docType: FieldRef<"Reservation", 'String'>
    readonly dni: FieldRef<"Reservation", 'String'>
    readonly hasAttachment: FieldRef<"Reservation", 'Boolean'>
    readonly attachmentName: FieldRef<"Reservation", 'String'>
    readonly dniException: FieldRef<"Reservation", 'Boolean'>
    readonly senaException: FieldRef<"Reservation", 'Boolean'>
    readonly hasPaymentProof: FieldRef<"Reservation", 'Boolean'>
    readonly paymentProofName: FieldRef<"Reservation", 'String'>
    readonly hasVideo: FieldRef<"Reservation", 'Boolean'>
    readonly videoName: FieldRef<"Reservation", 'String'>
    readonly videoUrl: FieldRef<"Reservation", 'String'>
    readonly observaciones: FieldRef<"Reservation", 'String'>
    readonly currency: FieldRef<"Reservation", 'String'>
    readonly channel: FieldRef<"Reservation", 'String'>
    readonly condition: FieldRef<"Reservation", 'String'>
    readonly nights: FieldRef<"Reservation", 'Int'>
    readonly valorNoches: FieldRef<"Reservation", 'Float'>
    readonly mascotasEnabled: FieldRef<"Reservation", 'Boolean'>
    readonly mascotasQty: FieldRef<"Reservation", 'Int'>
    readonly mascotasValue: FieldRef<"Reservation", 'Float'>
    readonly cocheraEnabled: FieldRef<"Reservation", 'Boolean'>
    readonly cocheraId: FieldRef<"Reservation", 'String'>
    readonly cocheraValue: FieldRef<"Reservation", 'Float'>
    readonly descuento: FieldRef<"Reservation", 'Float'>
    readonly totalNeto: FieldRef<"Reservation", 'Float'>
    readonly cargos: FieldRef<"Reservation", 'Float'>
    readonly totalBruto: FieldRef<"Reservation", 'Float'>
    readonly senaPct: FieldRef<"Reservation", 'Float'>
    readonly senaValue: FieldRef<"Reservation", 'Float'>
    readonly restante: FieldRef<"Reservation", 'Float'>
    readonly createdAt: FieldRef<"Reservation", 'DateTime'>
    readonly updatedAt: FieldRef<"Reservation", 'DateTime'>
    readonly extra: FieldRef<"Reservation", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
  }


  /**
   * Model RateEntry
   */

  export type AggregateRateEntry = {
    _count: RateEntryCountAggregateOutputType | null
    _avg: RateEntryAvgAggregateOutputType | null
    _sum: RateEntrySumAggregateOutputType | null
    _min: RateEntryMinAggregateOutputType | null
    _max: RateEntryMaxAggregateOutputType | null
  }

  export type RateEntryAvgAggregateOutputType = {
    price: number | null
  }

  export type RateEntrySumAggregateOutputType = {
    price: number | null
  }

  export type RateEntryMinAggregateOutputType = {
    propertyId: string | null
    date: string | null
    price: number | null
    available: boolean | null
    status: string | null
    closedUntil: string | null
    updatedAt: Date | null
  }

  export type RateEntryMaxAggregateOutputType = {
    propertyId: string | null
    date: string | null
    price: number | null
    available: boolean | null
    status: string | null
    closedUntil: string | null
    updatedAt: Date | null
  }

  export type RateEntryCountAggregateOutputType = {
    propertyId: number
    date: number
    price: number
    available: number
    status: number
    closedUntil: number
    planIds: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type RateEntryAvgAggregateInputType = {
    price?: true
  }

  export type RateEntrySumAggregateInputType = {
    price?: true
  }

  export type RateEntryMinAggregateInputType = {
    propertyId?: true
    date?: true
    price?: true
    available?: true
    status?: true
    closedUntil?: true
    updatedAt?: true
  }

  export type RateEntryMaxAggregateInputType = {
    propertyId?: true
    date?: true
    price?: true
    available?: true
    status?: true
    closedUntil?: true
    updatedAt?: true
  }

  export type RateEntryCountAggregateInputType = {
    propertyId?: true
    date?: true
    price?: true
    available?: true
    status?: true
    closedUntil?: true
    planIds?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type RateEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateEntry to aggregate.
     */
    where?: RateEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateEntries to fetch.
     */
    orderBy?: RateEntryOrderByWithRelationInput | RateEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RateEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RateEntries
    **/
    _count?: true | RateEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RateEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RateEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RateEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RateEntryMaxAggregateInputType
  }

  export type GetRateEntryAggregateType<T extends RateEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateRateEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRateEntry[P]>
      : GetScalarType<T[P], AggregateRateEntry[P]>
  }




  export type RateEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RateEntryWhereInput
    orderBy?: RateEntryOrderByWithAggregationInput | RateEntryOrderByWithAggregationInput[]
    by: RateEntryScalarFieldEnum[] | RateEntryScalarFieldEnum
    having?: RateEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RateEntryCountAggregateInputType | true
    _avg?: RateEntryAvgAggregateInputType
    _sum?: RateEntrySumAggregateInputType
    _min?: RateEntryMinAggregateInputType
    _max?: RateEntryMaxAggregateInputType
  }

  export type RateEntryGroupByOutputType = {
    propertyId: string
    date: string
    price: number
    available: boolean
    status: string | null
    closedUntil: string | null
    planIds: JsonValue
    updatedAt: Date
    extra: JsonValue | null
    _count: RateEntryCountAggregateOutputType | null
    _avg: RateEntryAvgAggregateOutputType | null
    _sum: RateEntrySumAggregateOutputType | null
    _min: RateEntryMinAggregateOutputType | null
    _max: RateEntryMaxAggregateOutputType | null
  }

  type GetRateEntryGroupByPayload<T extends RateEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RateEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RateEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RateEntryGroupByOutputType[P]>
            : GetScalarType<T[P], RateEntryGroupByOutputType[P]>
        }
      >
    >


  export type RateEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    propertyId?: boolean
    date?: boolean
    price?: boolean
    available?: boolean
    status?: boolean
    closedUntil?: boolean
    planIds?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["rateEntry"]>

  export type RateEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    propertyId?: boolean
    date?: boolean
    price?: boolean
    available?: boolean
    status?: boolean
    closedUntil?: boolean
    planIds?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["rateEntry"]>

  export type RateEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    propertyId?: boolean
    date?: boolean
    price?: boolean
    available?: boolean
    status?: boolean
    closedUntil?: boolean
    planIds?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["rateEntry"]>

  export type RateEntrySelectScalar = {
    propertyId?: boolean
    date?: boolean
    price?: boolean
    available?: boolean
    status?: boolean
    closedUntil?: boolean
    planIds?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type RateEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"propertyId" | "date" | "price" | "available" | "status" | "closedUntil" | "planIds" | "updatedAt" | "extra", ExtArgs["result"]["rateEntry"]>

  export type $RateEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RateEntry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      propertyId: string
      date: string
      price: number
      available: boolean
      status: string | null
      closedUntil: string | null
      planIds: Prisma.JsonValue
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["rateEntry"]>
    composites: {}
  }

  type RateEntryGetPayload<S extends boolean | null | undefined | RateEntryDefaultArgs> = $Result.GetResult<Prisma.$RateEntryPayload, S>

  type RateEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RateEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RateEntryCountAggregateInputType | true
    }

  export interface RateEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RateEntry'], meta: { name: 'RateEntry' } }
    /**
     * Find zero or one RateEntry that matches the filter.
     * @param {RateEntryFindUniqueArgs} args - Arguments to find a RateEntry
     * @example
     * // Get one RateEntry
     * const rateEntry = await prisma.rateEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RateEntryFindUniqueArgs>(args: SelectSubset<T, RateEntryFindUniqueArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RateEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RateEntryFindUniqueOrThrowArgs} args - Arguments to find a RateEntry
     * @example
     * // Get one RateEntry
     * const rateEntry = await prisma.rateEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RateEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, RateEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryFindFirstArgs} args - Arguments to find a RateEntry
     * @example
     * // Get one RateEntry
     * const rateEntry = await prisma.rateEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RateEntryFindFirstArgs>(args?: SelectSubset<T, RateEntryFindFirstArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RateEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryFindFirstOrThrowArgs} args - Arguments to find a RateEntry
     * @example
     * // Get one RateEntry
     * const rateEntry = await prisma.rateEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RateEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, RateEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RateEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RateEntries
     * const rateEntries = await prisma.rateEntry.findMany()
     * 
     * // Get first 10 RateEntries
     * const rateEntries = await prisma.rateEntry.findMany({ take: 10 })
     * 
     * // Only select the `propertyId`
     * const rateEntryWithPropertyIdOnly = await prisma.rateEntry.findMany({ select: { propertyId: true } })
     * 
     */
    findMany<T extends RateEntryFindManyArgs>(args?: SelectSubset<T, RateEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RateEntry.
     * @param {RateEntryCreateArgs} args - Arguments to create a RateEntry.
     * @example
     * // Create one RateEntry
     * const RateEntry = await prisma.rateEntry.create({
     *   data: {
     *     // ... data to create a RateEntry
     *   }
     * })
     * 
     */
    create<T extends RateEntryCreateArgs>(args: SelectSubset<T, RateEntryCreateArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RateEntries.
     * @param {RateEntryCreateManyArgs} args - Arguments to create many RateEntries.
     * @example
     * // Create many RateEntries
     * const rateEntry = await prisma.rateEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RateEntryCreateManyArgs>(args?: SelectSubset<T, RateEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RateEntries and returns the data saved in the database.
     * @param {RateEntryCreateManyAndReturnArgs} args - Arguments to create many RateEntries.
     * @example
     * // Create many RateEntries
     * const rateEntry = await prisma.rateEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RateEntries and only return the `propertyId`
     * const rateEntryWithPropertyIdOnly = await prisma.rateEntry.createManyAndReturn({
     *   select: { propertyId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RateEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, RateEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RateEntry.
     * @param {RateEntryDeleteArgs} args - Arguments to delete one RateEntry.
     * @example
     * // Delete one RateEntry
     * const RateEntry = await prisma.rateEntry.delete({
     *   where: {
     *     // ... filter to delete one RateEntry
     *   }
     * })
     * 
     */
    delete<T extends RateEntryDeleteArgs>(args: SelectSubset<T, RateEntryDeleteArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RateEntry.
     * @param {RateEntryUpdateArgs} args - Arguments to update one RateEntry.
     * @example
     * // Update one RateEntry
     * const rateEntry = await prisma.rateEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RateEntryUpdateArgs>(args: SelectSubset<T, RateEntryUpdateArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RateEntries.
     * @param {RateEntryDeleteManyArgs} args - Arguments to filter RateEntries to delete.
     * @example
     * // Delete a few RateEntries
     * const { count } = await prisma.rateEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RateEntryDeleteManyArgs>(args?: SelectSubset<T, RateEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RateEntries
     * const rateEntry = await prisma.rateEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RateEntryUpdateManyArgs>(args: SelectSubset<T, RateEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RateEntries and returns the data updated in the database.
     * @param {RateEntryUpdateManyAndReturnArgs} args - Arguments to update many RateEntries.
     * @example
     * // Update many RateEntries
     * const rateEntry = await prisma.rateEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RateEntries and only return the `propertyId`
     * const rateEntryWithPropertyIdOnly = await prisma.rateEntry.updateManyAndReturn({
     *   select: { propertyId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RateEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, RateEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RateEntry.
     * @param {RateEntryUpsertArgs} args - Arguments to update or create a RateEntry.
     * @example
     * // Update or create a RateEntry
     * const rateEntry = await prisma.rateEntry.upsert({
     *   create: {
     *     // ... data to create a RateEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RateEntry we want to update
     *   }
     * })
     */
    upsert<T extends RateEntryUpsertArgs>(args: SelectSubset<T, RateEntryUpsertArgs<ExtArgs>>): Prisma__RateEntryClient<$Result.GetResult<Prisma.$RateEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RateEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryCountArgs} args - Arguments to filter RateEntries to count.
     * @example
     * // Count the number of RateEntries
     * const count = await prisma.rateEntry.count({
     *   where: {
     *     // ... the filter for the RateEntries we want to count
     *   }
     * })
    **/
    count<T extends RateEntryCountArgs>(
      args?: Subset<T, RateEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RateEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RateEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RateEntryAggregateArgs>(args: Subset<T, RateEntryAggregateArgs>): Prisma.PrismaPromise<GetRateEntryAggregateType<T>>

    /**
     * Group by RateEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RateEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RateEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RateEntryGroupByArgs['orderBy'] }
        : { orderBy?: RateEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RateEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRateEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RateEntry model
   */
  readonly fields: RateEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RateEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RateEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RateEntry model
   */
  interface RateEntryFieldRefs {
    readonly propertyId: FieldRef<"RateEntry", 'String'>
    readonly date: FieldRef<"RateEntry", 'String'>
    readonly price: FieldRef<"RateEntry", 'Float'>
    readonly available: FieldRef<"RateEntry", 'Boolean'>
    readonly status: FieldRef<"RateEntry", 'String'>
    readonly closedUntil: FieldRef<"RateEntry", 'String'>
    readonly planIds: FieldRef<"RateEntry", 'Json'>
    readonly updatedAt: FieldRef<"RateEntry", 'DateTime'>
    readonly extra: FieldRef<"RateEntry", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RateEntry findUnique
   */
  export type RateEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter, which RateEntry to fetch.
     */
    where: RateEntryWhereUniqueInput
  }

  /**
   * RateEntry findUniqueOrThrow
   */
  export type RateEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter, which RateEntry to fetch.
     */
    where: RateEntryWhereUniqueInput
  }

  /**
   * RateEntry findFirst
   */
  export type RateEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter, which RateEntry to fetch.
     */
    where?: RateEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateEntries to fetch.
     */
    orderBy?: RateEntryOrderByWithRelationInput | RateEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateEntries.
     */
    cursor?: RateEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateEntries.
     */
    distinct?: RateEntryScalarFieldEnum | RateEntryScalarFieldEnum[]
  }

  /**
   * RateEntry findFirstOrThrow
   */
  export type RateEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter, which RateEntry to fetch.
     */
    where?: RateEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateEntries to fetch.
     */
    orderBy?: RateEntryOrderByWithRelationInput | RateEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RateEntries.
     */
    cursor?: RateEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RateEntries.
     */
    distinct?: RateEntryScalarFieldEnum | RateEntryScalarFieldEnum[]
  }

  /**
   * RateEntry findMany
   */
  export type RateEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter, which RateEntries to fetch.
     */
    where?: RateEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RateEntries to fetch.
     */
    orderBy?: RateEntryOrderByWithRelationInput | RateEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RateEntries.
     */
    cursor?: RateEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RateEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RateEntries.
     */
    skip?: number
    distinct?: RateEntryScalarFieldEnum | RateEntryScalarFieldEnum[]
  }

  /**
   * RateEntry create
   */
  export type RateEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * The data needed to create a RateEntry.
     */
    data: XOR<RateEntryCreateInput, RateEntryUncheckedCreateInput>
  }

  /**
   * RateEntry createMany
   */
  export type RateEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RateEntries.
     */
    data: RateEntryCreateManyInput | RateEntryCreateManyInput[]
  }

  /**
   * RateEntry createManyAndReturn
   */
  export type RateEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * The data used to create many RateEntries.
     */
    data: RateEntryCreateManyInput | RateEntryCreateManyInput[]
  }

  /**
   * RateEntry update
   */
  export type RateEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * The data needed to update a RateEntry.
     */
    data: XOR<RateEntryUpdateInput, RateEntryUncheckedUpdateInput>
    /**
     * Choose, which RateEntry to update.
     */
    where: RateEntryWhereUniqueInput
  }

  /**
   * RateEntry updateMany
   */
  export type RateEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RateEntries.
     */
    data: XOR<RateEntryUpdateManyMutationInput, RateEntryUncheckedUpdateManyInput>
    /**
     * Filter which RateEntries to update
     */
    where?: RateEntryWhereInput
    /**
     * Limit how many RateEntries to update.
     */
    limit?: number
  }

  /**
   * RateEntry updateManyAndReturn
   */
  export type RateEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * The data used to update RateEntries.
     */
    data: XOR<RateEntryUpdateManyMutationInput, RateEntryUncheckedUpdateManyInput>
    /**
     * Filter which RateEntries to update
     */
    where?: RateEntryWhereInput
    /**
     * Limit how many RateEntries to update.
     */
    limit?: number
  }

  /**
   * RateEntry upsert
   */
  export type RateEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * The filter to search for the RateEntry to update in case it exists.
     */
    where: RateEntryWhereUniqueInput
    /**
     * In case the RateEntry found by the `where` argument doesn't exist, create a new RateEntry with this data.
     */
    create: XOR<RateEntryCreateInput, RateEntryUncheckedCreateInput>
    /**
     * In case the RateEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RateEntryUpdateInput, RateEntryUncheckedUpdateInput>
  }

  /**
   * RateEntry delete
   */
  export type RateEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
    /**
     * Filter which RateEntry to delete.
     */
    where: RateEntryWhereUniqueInput
  }

  /**
   * RateEntry deleteMany
   */
  export type RateEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RateEntries to delete
     */
    where?: RateEntryWhereInput
    /**
     * Limit how many RateEntries to delete.
     */
    limit?: number
  }

  /**
   * RateEntry without action
   */
  export type RateEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RateEntry
     */
    select?: RateEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the RateEntry
     */
    omit?: RateEntryOmit<ExtArgs> | null
  }


  /**
   * Model RatePlan
   */

  export type AggregateRatePlan = {
    _count: RatePlanCountAggregateOutputType | null
    _avg: RatePlanAvgAggregateOutputType | null
    _sum: RatePlanSumAggregateOutputType | null
    _min: RatePlanMinAggregateOutputType | null
    _max: RatePlanMaxAggregateOutputType | null
  }

  export type RatePlanAvgAggregateOutputType = {
    minNights: number | null
  }

  export type RatePlanSumAggregateOutputType = {
    minNights: number | null
  }

  export type RatePlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    hasMinNights: boolean | null
    minNights: number | null
    hasPerDayNights: boolean | null
    priceVariation: string | null
    priceVariationType: string | null
    hasStayDiscount: boolean | null
    weekendSurcharge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatePlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    color: string | null
    hasMinNights: boolean | null
    minNights: number | null
    hasPerDayNights: boolean | null
    priceVariation: string | null
    priceVariationType: string | null
    hasStayDiscount: boolean | null
    weekendSurcharge: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RatePlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    color: number
    hasMinNights: number
    minNights: number
    hasPerDayNights: number
    perDayNights: number
    priceVariation: number
    priceVariationType: number
    hasStayDiscount: number
    stayDiscounts: number
    proximityDiscounts: number
    weekendSurcharge: number
    createdAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type RatePlanAvgAggregateInputType = {
    minNights?: true
  }

  export type RatePlanSumAggregateInputType = {
    minNights?: true
  }

  export type RatePlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    hasMinNights?: true
    minNights?: true
    hasPerDayNights?: true
    priceVariation?: true
    priceVariationType?: true
    hasStayDiscount?: true
    weekendSurcharge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatePlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    hasMinNights?: true
    minNights?: true
    hasPerDayNights?: true
    priceVariation?: true
    priceVariationType?: true
    hasStayDiscount?: true
    weekendSurcharge?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RatePlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    color?: true
    hasMinNights?: true
    minNights?: true
    hasPerDayNights?: true
    perDayNights?: true
    priceVariation?: true
    priceVariationType?: true
    hasStayDiscount?: true
    stayDiscounts?: true
    proximityDiscounts?: true
    weekendSurcharge?: true
    createdAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type RatePlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatePlan to aggregate.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RatePlans
    **/
    _count?: true | RatePlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatePlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatePlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatePlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatePlanMaxAggregateInputType
  }

  export type GetRatePlanAggregateType<T extends RatePlanAggregateArgs> = {
        [P in keyof T & keyof AggregateRatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRatePlan[P]>
      : GetScalarType<T[P], AggregateRatePlan[P]>
  }




  export type RatePlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatePlanWhereInput
    orderBy?: RatePlanOrderByWithAggregationInput | RatePlanOrderByWithAggregationInput[]
    by: RatePlanScalarFieldEnum[] | RatePlanScalarFieldEnum
    having?: RatePlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatePlanCountAggregateInputType | true
    _avg?: RatePlanAvgAggregateInputType
    _sum?: RatePlanSumAggregateInputType
    _min?: RatePlanMinAggregateInputType
    _max?: RatePlanMaxAggregateInputType
  }

  export type RatePlanGroupByOutputType = {
    id: string
    name: string
    description: string
    color: string | null
    hasMinNights: boolean
    minNights: number
    hasPerDayNights: boolean
    perDayNights: JsonValue
    priceVariation: string
    priceVariationType: string
    hasStayDiscount: boolean
    stayDiscounts: JsonValue
    proximityDiscounts: JsonValue
    weekendSurcharge: string
    createdAt: Date
    updatedAt: Date
    extra: JsonValue | null
    _count: RatePlanCountAggregateOutputType | null
    _avg: RatePlanAvgAggregateOutputType | null
    _sum: RatePlanSumAggregateOutputType | null
    _min: RatePlanMinAggregateOutputType | null
    _max: RatePlanMaxAggregateOutputType | null
  }

  type GetRatePlanGroupByPayload<T extends RatePlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatePlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatePlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatePlanGroupByOutputType[P]>
            : GetScalarType<T[P], RatePlanGroupByOutputType[P]>
        }
      >
    >


  export type RatePlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    hasMinNights?: boolean
    minNights?: boolean
    hasPerDayNights?: boolean
    perDayNights?: boolean
    priceVariation?: boolean
    priceVariationType?: boolean
    hasStayDiscount?: boolean
    stayDiscounts?: boolean
    proximityDiscounts?: boolean
    weekendSurcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    hasMinNights?: boolean
    minNights?: boolean
    hasPerDayNights?: boolean
    perDayNights?: boolean
    priceVariation?: boolean
    priceVariationType?: boolean
    hasStayDiscount?: boolean
    stayDiscounts?: boolean
    proximityDiscounts?: boolean
    weekendSurcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    hasMinNights?: boolean
    minNights?: boolean
    hasPerDayNights?: boolean
    perDayNights?: boolean
    priceVariation?: boolean
    priceVariationType?: boolean
    hasStayDiscount?: boolean
    stayDiscounts?: boolean
    proximityDiscounts?: boolean
    weekendSurcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["ratePlan"]>

  export type RatePlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    color?: boolean
    hasMinNights?: boolean
    minNights?: boolean
    hasPerDayNights?: boolean
    perDayNights?: boolean
    priceVariation?: boolean
    priceVariationType?: boolean
    hasStayDiscount?: boolean
    stayDiscounts?: boolean
    proximityDiscounts?: boolean
    weekendSurcharge?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type RatePlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "color" | "hasMinNights" | "minNights" | "hasPerDayNights" | "perDayNights" | "priceVariation" | "priceVariationType" | "hasStayDiscount" | "stayDiscounts" | "proximityDiscounts" | "weekendSurcharge" | "createdAt" | "updatedAt" | "extra", ExtArgs["result"]["ratePlan"]>

  export type $RatePlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RatePlan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      color: string | null
      hasMinNights: boolean
      minNights: number
      hasPerDayNights: boolean
      perDayNights: Prisma.JsonValue
      priceVariation: string
      priceVariationType: string
      hasStayDiscount: boolean
      stayDiscounts: Prisma.JsonValue
      proximityDiscounts: Prisma.JsonValue
      weekendSurcharge: string
      createdAt: Date
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["ratePlan"]>
    composites: {}
  }

  type RatePlanGetPayload<S extends boolean | null | undefined | RatePlanDefaultArgs> = $Result.GetResult<Prisma.$RatePlanPayload, S>

  type RatePlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatePlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatePlanCountAggregateInputType | true
    }

  export interface RatePlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RatePlan'], meta: { name: 'RatePlan' } }
    /**
     * Find zero or one RatePlan that matches the filter.
     * @param {RatePlanFindUniqueArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatePlanFindUniqueArgs>(args: SelectSubset<T, RatePlanFindUniqueArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RatePlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatePlanFindUniqueOrThrowArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatePlanFindUniqueOrThrowArgs>(args: SelectSubset<T, RatePlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatePlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindFirstArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatePlanFindFirstArgs>(args?: SelectSubset<T, RatePlanFindFirstArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RatePlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindFirstOrThrowArgs} args - Arguments to find a RatePlan
     * @example
     * // Get one RatePlan
     * const ratePlan = await prisma.ratePlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatePlanFindFirstOrThrowArgs>(args?: SelectSubset<T, RatePlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RatePlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RatePlans
     * const ratePlans = await prisma.ratePlan.findMany()
     * 
     * // Get first 10 RatePlans
     * const ratePlans = await prisma.ratePlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatePlanFindManyArgs>(args?: SelectSubset<T, RatePlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RatePlan.
     * @param {RatePlanCreateArgs} args - Arguments to create a RatePlan.
     * @example
     * // Create one RatePlan
     * const RatePlan = await prisma.ratePlan.create({
     *   data: {
     *     // ... data to create a RatePlan
     *   }
     * })
     * 
     */
    create<T extends RatePlanCreateArgs>(args: SelectSubset<T, RatePlanCreateArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RatePlans.
     * @param {RatePlanCreateManyArgs} args - Arguments to create many RatePlans.
     * @example
     * // Create many RatePlans
     * const ratePlan = await prisma.ratePlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatePlanCreateManyArgs>(args?: SelectSubset<T, RatePlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RatePlans and returns the data saved in the database.
     * @param {RatePlanCreateManyAndReturnArgs} args - Arguments to create many RatePlans.
     * @example
     * // Create many RatePlans
     * const ratePlan = await prisma.ratePlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RatePlans and only return the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatePlanCreateManyAndReturnArgs>(args?: SelectSubset<T, RatePlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RatePlan.
     * @param {RatePlanDeleteArgs} args - Arguments to delete one RatePlan.
     * @example
     * // Delete one RatePlan
     * const RatePlan = await prisma.ratePlan.delete({
     *   where: {
     *     // ... filter to delete one RatePlan
     *   }
     * })
     * 
     */
    delete<T extends RatePlanDeleteArgs>(args: SelectSubset<T, RatePlanDeleteArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RatePlan.
     * @param {RatePlanUpdateArgs} args - Arguments to update one RatePlan.
     * @example
     * // Update one RatePlan
     * const ratePlan = await prisma.ratePlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatePlanUpdateArgs>(args: SelectSubset<T, RatePlanUpdateArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RatePlans.
     * @param {RatePlanDeleteManyArgs} args - Arguments to filter RatePlans to delete.
     * @example
     * // Delete a few RatePlans
     * const { count } = await prisma.ratePlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatePlanDeleteManyArgs>(args?: SelectSubset<T, RatePlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RatePlans
     * const ratePlan = await prisma.ratePlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatePlanUpdateManyArgs>(args: SelectSubset<T, RatePlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RatePlans and returns the data updated in the database.
     * @param {RatePlanUpdateManyAndReturnArgs} args - Arguments to update many RatePlans.
     * @example
     * // Update many RatePlans
     * const ratePlan = await prisma.ratePlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RatePlans and only return the `id`
     * const ratePlanWithIdOnly = await prisma.ratePlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatePlanUpdateManyAndReturnArgs>(args: SelectSubset<T, RatePlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RatePlan.
     * @param {RatePlanUpsertArgs} args - Arguments to update or create a RatePlan.
     * @example
     * // Update or create a RatePlan
     * const ratePlan = await prisma.ratePlan.upsert({
     *   create: {
     *     // ... data to create a RatePlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RatePlan we want to update
     *   }
     * })
     */
    upsert<T extends RatePlanUpsertArgs>(args: SelectSubset<T, RatePlanUpsertArgs<ExtArgs>>): Prisma__RatePlanClient<$Result.GetResult<Prisma.$RatePlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RatePlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanCountArgs} args - Arguments to filter RatePlans to count.
     * @example
     * // Count the number of RatePlans
     * const count = await prisma.ratePlan.count({
     *   where: {
     *     // ... the filter for the RatePlans we want to count
     *   }
     * })
    **/
    count<T extends RatePlanCountArgs>(
      args?: Subset<T, RatePlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatePlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RatePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatePlanAggregateArgs>(args: Subset<T, RatePlanAggregateArgs>): Prisma.PrismaPromise<GetRatePlanAggregateType<T>>

    /**
     * Group by RatePlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatePlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatePlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatePlanGroupByArgs['orderBy'] }
        : { orderBy?: RatePlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatePlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatePlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RatePlan model
   */
  readonly fields: RatePlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RatePlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatePlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RatePlan model
   */
  interface RatePlanFieldRefs {
    readonly id: FieldRef<"RatePlan", 'String'>
    readonly name: FieldRef<"RatePlan", 'String'>
    readonly description: FieldRef<"RatePlan", 'String'>
    readonly color: FieldRef<"RatePlan", 'String'>
    readonly hasMinNights: FieldRef<"RatePlan", 'Boolean'>
    readonly minNights: FieldRef<"RatePlan", 'Int'>
    readonly hasPerDayNights: FieldRef<"RatePlan", 'Boolean'>
    readonly perDayNights: FieldRef<"RatePlan", 'Json'>
    readonly priceVariation: FieldRef<"RatePlan", 'String'>
    readonly priceVariationType: FieldRef<"RatePlan", 'String'>
    readonly hasStayDiscount: FieldRef<"RatePlan", 'Boolean'>
    readonly stayDiscounts: FieldRef<"RatePlan", 'Json'>
    readonly proximityDiscounts: FieldRef<"RatePlan", 'Json'>
    readonly weekendSurcharge: FieldRef<"RatePlan", 'String'>
    readonly createdAt: FieldRef<"RatePlan", 'DateTime'>
    readonly updatedAt: FieldRef<"RatePlan", 'DateTime'>
    readonly extra: FieldRef<"RatePlan", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * RatePlan findUnique
   */
  export type RatePlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan findUniqueOrThrow
   */
  export type RatePlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan findFirst
   */
  export type RatePlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatePlans.
     */
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan findFirstOrThrow
   */
  export type RatePlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter, which RatePlan to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RatePlans.
     */
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan findMany
   */
  export type RatePlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter, which RatePlans to fetch.
     */
    where?: RatePlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RatePlans to fetch.
     */
    orderBy?: RatePlanOrderByWithRelationInput | RatePlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RatePlans.
     */
    cursor?: RatePlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RatePlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RatePlans.
     */
    skip?: number
    distinct?: RatePlanScalarFieldEnum | RatePlanScalarFieldEnum[]
  }

  /**
   * RatePlan create
   */
  export type RatePlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data needed to create a RatePlan.
     */
    data: XOR<RatePlanCreateInput, RatePlanUncheckedCreateInput>
  }

  /**
   * RatePlan createMany
   */
  export type RatePlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RatePlans.
     */
    data: RatePlanCreateManyInput | RatePlanCreateManyInput[]
  }

  /**
   * RatePlan createManyAndReturn
   */
  export type RatePlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data used to create many RatePlans.
     */
    data: RatePlanCreateManyInput | RatePlanCreateManyInput[]
  }

  /**
   * RatePlan update
   */
  export type RatePlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data needed to update a RatePlan.
     */
    data: XOR<RatePlanUpdateInput, RatePlanUncheckedUpdateInput>
    /**
     * Choose, which RatePlan to update.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan updateMany
   */
  export type RatePlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RatePlans.
     */
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyInput>
    /**
     * Filter which RatePlans to update
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to update.
     */
    limit?: number
  }

  /**
   * RatePlan updateManyAndReturn
   */
  export type RatePlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The data used to update RatePlans.
     */
    data: XOR<RatePlanUpdateManyMutationInput, RatePlanUncheckedUpdateManyInput>
    /**
     * Filter which RatePlans to update
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to update.
     */
    limit?: number
  }

  /**
   * RatePlan upsert
   */
  export type RatePlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * The filter to search for the RatePlan to update in case it exists.
     */
    where: RatePlanWhereUniqueInput
    /**
     * In case the RatePlan found by the `where` argument doesn't exist, create a new RatePlan with this data.
     */
    create: XOR<RatePlanCreateInput, RatePlanUncheckedCreateInput>
    /**
     * In case the RatePlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatePlanUpdateInput, RatePlanUncheckedUpdateInput>
  }

  /**
   * RatePlan delete
   */
  export type RatePlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
    /**
     * Filter which RatePlan to delete.
     */
    where: RatePlanWhereUniqueInput
  }

  /**
   * RatePlan deleteMany
   */
  export type RatePlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RatePlans to delete
     */
    where?: RatePlanWhereInput
    /**
     * Limit how many RatePlans to delete.
     */
    limit?: number
  }

  /**
   * RatePlan without action
   */
  export type RatePlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RatePlan
     */
    select?: RatePlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RatePlan
     */
    omit?: RatePlanOmit<ExtArgs> | null
  }


  /**
   * Model Expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    id: bigint | null
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: bigint | null
    description: string | null
    amount: number | null
    date: string | null
    category: string | null
    unit: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: bigint | null
    description: string | null
    amount: number | null
    date: string | null
    category: string | null
    unit: string | null
    receipt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    date: number
    category: number
    unit: number
    receipt: number
    createdAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    unit?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    unit?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    category?: true
    unit?: true
    receipt?: true
    createdAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expense to aggregate.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type ExpenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithAggregationInput | ExpenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: ExpenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: bigint
    description: string
    amount: number
    date: string
    category: string
    unit: string
    receipt: string | null
    createdAt: Date
    updatedAt: Date
    extra: JsonValue | null
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends ExpenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type ExpenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    unit?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    unit?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    unit?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    category?: boolean
    unit?: boolean
    receipt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "date" | "category" | "unit" | "receipt" | "createdAt" | "updatedAt" | "extra", ExtArgs["result"]["expense"]>

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      description: string
      amount: number
      date: string
      category: string
      unit: string
      receipt: string | null
      createdAt: Date
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type ExpenseGetPayload<S extends boolean | null | undefined | ExpenseDefaultArgs> = $Result.GetResult<Prisma.$ExpensePayload, S>

  type ExpenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExpenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface ExpenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Expense'], meta: { name: 'Expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {ExpenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExpenseFindUniqueArgs>(args: SelectSubset<T, ExpenseFindUniqueArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExpenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExpenseFindUniqueOrThrowArgs>(args: SelectSubset<T, ExpenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExpenseFindFirstArgs>(args?: SelectSubset<T, ExpenseFindFirstArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExpenseFindFirstOrThrowArgs>(args?: SelectSubset<T, ExpenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExpenseFindManyArgs>(args?: SelectSubset<T, ExpenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {ExpenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends ExpenseCreateArgs>(args: SelectSubset<T, ExpenseCreateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {ExpenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExpenseCreateManyArgs>(args?: SelectSubset<T, ExpenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {ExpenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExpenseCreateManyAndReturnArgs>(args?: SelectSubset<T, ExpenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {ExpenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends ExpenseDeleteArgs>(args: SelectSubset<T, ExpenseDeleteArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {ExpenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExpenseUpdateArgs>(args: SelectSubset<T, ExpenseUpdateArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {ExpenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExpenseDeleteManyArgs>(args?: SelectSubset<T, ExpenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExpenseUpdateManyArgs>(args: SelectSubset<T, ExpenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {ExpenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExpenseUpdateManyAndReturnArgs>(args: SelectSubset<T, ExpenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {ExpenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends ExpenseUpsertArgs>(args: SelectSubset<T, ExpenseUpsertArgs<ExtArgs>>): Prisma__ExpenseClient<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends ExpenseCountArgs>(
      args?: Subset<T, ExpenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExpenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExpenseGroupByArgs['orderBy'] }
        : { orderBy?: ExpenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExpenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Expense model
   */
  readonly fields: ExpenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExpenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Expense model
   */
  interface ExpenseFieldRefs {
    readonly id: FieldRef<"Expense", 'BigInt'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly date: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly unit: FieldRef<"Expense", 'String'>
    readonly receipt: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
    readonly updatedAt: FieldRef<"Expense", 'DateTime'>
    readonly extra: FieldRef<"Expense", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Expense findUnique
   */
  export type ExpenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findUniqueOrThrow
   */
  export type ExpenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense findFirst
   */
  export type ExpenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findFirstOrThrow
   */
  export type ExpenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expense to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense findMany
   */
  export type ExpenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter, which Expenses to fetch.
     */
    where?: ExpenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Expenses to fetch.
     */
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Expenses.
     */
    cursor?: ExpenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Expense create
   */
  export type ExpenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to create a Expense.
     */
    data: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
  }

  /**
   * Expense createMany
   */
  export type ExpenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense createManyAndReturn
   */
  export type ExpenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to create many Expenses.
     */
    data: ExpenseCreateManyInput | ExpenseCreateManyInput[]
  }

  /**
   * Expense update
   */
  export type ExpenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data needed to update a Expense.
     */
    data: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
    /**
     * Choose, which Expense to update.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense updateMany
   */
  export type ExpenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense updateManyAndReturn
   */
  export type ExpenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The data used to update Expenses.
     */
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyInput>
    /**
     * Filter which Expenses to update
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to update.
     */
    limit?: number
  }

  /**
   * Expense upsert
   */
  export type ExpenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * The filter to search for the Expense to update in case it exists.
     */
    where: ExpenseWhereUniqueInput
    /**
     * In case the Expense found by the `where` argument doesn't exist, create a new Expense with this data.
     */
    create: XOR<ExpenseCreateInput, ExpenseUncheckedCreateInput>
    /**
     * In case the Expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExpenseUpdateInput, ExpenseUncheckedUpdateInput>
  }

  /**
   * Expense delete
   */
  export type ExpenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Filter which Expense to delete.
     */
    where: ExpenseWhereUniqueInput
  }

  /**
   * Expense deleteMany
   */
  export type ExpenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Expenses to delete
     */
    where?: ExpenseWhereInput
    /**
     * Limit how many Expenses to delete.
     */
    limit?: number
  }

  /**
   * Expense without action
   */
  export type ExpenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
  }


  /**
   * Model InventoryItem
   */

  export type AggregateInventoryItem = {
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  export type InventoryItemAvgAggregateOutputType = {
    id: number | null
    currentStock: number | null
    minStock: number | null
    maxStock: number | null
    cost: number | null
  }

  export type InventoryItemSumAggregateOutputType = {
    id: bigint | null
    currentStock: number | null
    minStock: number | null
    maxStock: number | null
    cost: number | null
  }

  export type InventoryItemMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    category: string | null
    currentStock: number | null
    minStock: number | null
    maxStock: number | null
    unit: string | null
    location: string | null
    cost: number | null
    supplier: string | null
    lastRestocked: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    category: string | null
    currentStock: number | null
    minStock: number | null
    maxStock: number | null
    unit: string | null
    location: string | null
    cost: number | null
    supplier: string | null
    lastRestocked: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryItemCountAggregateOutputType = {
    id: number
    name: number
    category: number
    currentStock: number
    minStock: number
    maxStock: number
    unit: number
    location: number
    cost: number
    supplier: number
    lastRestocked: number
    createdAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type InventoryItemAvgAggregateInputType = {
    id?: true
    currentStock?: true
    minStock?: true
    maxStock?: true
    cost?: true
  }

  export type InventoryItemSumAggregateInputType = {
    id?: true
    currentStock?: true
    minStock?: true
    maxStock?: true
    cost?: true
  }

  export type InventoryItemMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
    currentStock?: true
    minStock?: true
    maxStock?: true
    unit?: true
    location?: true
    cost?: true
    supplier?: true
    lastRestocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
    currentStock?: true
    minStock?: true
    maxStock?: true
    unit?: true
    location?: true
    cost?: true
    supplier?: true
    lastRestocked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryItemCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    currentStock?: true
    minStock?: true
    maxStock?: true
    unit?: true
    location?: true
    cost?: true
    supplier?: true
    lastRestocked?: true
    createdAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type InventoryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItem to aggregate.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InventoryItems
    **/
    _count?: true | InventoryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventoryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryItemMaxAggregateInputType
  }

  export type GetInventoryItemAggregateType<T extends InventoryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateInventoryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventoryItem[P]>
      : GetScalarType<T[P], AggregateInventoryItem[P]>
  }




  export type InventoryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryItemWhereInput
    orderBy?: InventoryItemOrderByWithAggregationInput | InventoryItemOrderByWithAggregationInput[]
    by: InventoryItemScalarFieldEnum[] | InventoryItemScalarFieldEnum
    having?: InventoryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryItemCountAggregateInputType | true
    _avg?: InventoryItemAvgAggregateInputType
    _sum?: InventoryItemSumAggregateInputType
    _min?: InventoryItemMinAggregateInputType
    _max?: InventoryItemMaxAggregateInputType
  }

  export type InventoryItemGroupByOutputType = {
    id: bigint
    name: string
    category: string
    currentStock: number
    minStock: number
    maxStock: number
    unit: string
    location: string
    cost: number
    supplier: string | null
    lastRestocked: string | null
    createdAt: Date
    updatedAt: Date
    extra: JsonValue | null
    _count: InventoryItemCountAggregateOutputType | null
    _avg: InventoryItemAvgAggregateOutputType | null
    _sum: InventoryItemSumAggregateOutputType | null
    _min: InventoryItemMinAggregateOutputType | null
    _max: InventoryItemMaxAggregateOutputType | null
  }

  type GetInventoryItemGroupByPayload<T extends InventoryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryItemGroupByOutputType[P]>
        }
      >
    >


  export type InventoryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    currentStock?: boolean
    minStock?: boolean
    maxStock?: boolean
    unit?: boolean
    location?: boolean
    cost?: boolean
    supplier?: boolean
    lastRestocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    currentStock?: boolean
    minStock?: boolean
    maxStock?: boolean
    unit?: boolean
    location?: boolean
    cost?: boolean
    supplier?: boolean
    lastRestocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    currentStock?: boolean
    minStock?: boolean
    maxStock?: boolean
    unit?: boolean
    location?: boolean
    cost?: boolean
    supplier?: boolean
    lastRestocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["inventoryItem"]>

  export type InventoryItemSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
    currentStock?: boolean
    minStock?: boolean
    maxStock?: boolean
    unit?: boolean
    location?: boolean
    cost?: boolean
    supplier?: boolean
    lastRestocked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type InventoryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category" | "currentStock" | "minStock" | "maxStock" | "unit" | "location" | "cost" | "supplier" | "lastRestocked" | "createdAt" | "updatedAt" | "extra", ExtArgs["result"]["inventoryItem"]>

  export type $InventoryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InventoryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      category: string
      currentStock: number
      minStock: number
      maxStock: number
      unit: string
      location: string
      cost: number
      supplier: string | null
      lastRestocked: string | null
      createdAt: Date
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["inventoryItem"]>
    composites: {}
  }

  type InventoryItemGetPayload<S extends boolean | null | undefined | InventoryItemDefaultArgs> = $Result.GetResult<Prisma.$InventoryItemPayload, S>

  type InventoryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryItemCountAggregateInputType | true
    }

  export interface InventoryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InventoryItem'], meta: { name: 'InventoryItem' } }
    /**
     * Find zero or one InventoryItem that matches the filter.
     * @param {InventoryItemFindUniqueArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryItemFindUniqueArgs>(args: SelectSubset<T, InventoryItemFindUniqueArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InventoryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryItemFindUniqueOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryItemFindFirstArgs>(args?: SelectSubset<T, InventoryItemFindFirstArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InventoryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindFirstOrThrowArgs} args - Arguments to find a InventoryItem
     * @example
     * // Get one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InventoryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany()
     * 
     * // Get first 10 InventoryItems
     * const inventoryItems = await prisma.inventoryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryItemFindManyArgs>(args?: SelectSubset<T, InventoryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InventoryItem.
     * @param {InventoryItemCreateArgs} args - Arguments to create a InventoryItem.
     * @example
     * // Create one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.create({
     *   data: {
     *     // ... data to create a InventoryItem
     *   }
     * })
     * 
     */
    create<T extends InventoryItemCreateArgs>(args: SelectSubset<T, InventoryItemCreateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InventoryItems.
     * @param {InventoryItemCreateManyArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryItemCreateManyArgs>(args?: SelectSubset<T, InventoryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InventoryItems and returns the data saved in the database.
     * @param {InventoryItemCreateManyAndReturnArgs} args - Arguments to create many InventoryItems.
     * @example
     * // Create many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InventoryItem.
     * @param {InventoryItemDeleteArgs} args - Arguments to delete one InventoryItem.
     * @example
     * // Delete one InventoryItem
     * const InventoryItem = await prisma.inventoryItem.delete({
     *   where: {
     *     // ... filter to delete one InventoryItem
     *   }
     * })
     * 
     */
    delete<T extends InventoryItemDeleteArgs>(args: SelectSubset<T, InventoryItemDeleteArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InventoryItem.
     * @param {InventoryItemUpdateArgs} args - Arguments to update one InventoryItem.
     * @example
     * // Update one InventoryItem
     * const inventoryItem = await prisma.inventoryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryItemUpdateArgs>(args: SelectSubset<T, InventoryItemUpdateArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InventoryItems.
     * @param {InventoryItemDeleteManyArgs} args - Arguments to filter InventoryItems to delete.
     * @example
     * // Delete a few InventoryItems
     * const { count } = await prisma.inventoryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryItemDeleteManyArgs>(args?: SelectSubset<T, InventoryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryItemUpdateManyArgs>(args: SelectSubset<T, InventoryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InventoryItems and returns the data updated in the database.
     * @param {InventoryItemUpdateManyAndReturnArgs} args - Arguments to update many InventoryItems.
     * @example
     * // Update many InventoryItems
     * const inventoryItem = await prisma.inventoryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InventoryItems and only return the `id`
     * const inventoryItemWithIdOnly = await prisma.inventoryItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InventoryItem.
     * @param {InventoryItemUpsertArgs} args - Arguments to update or create a InventoryItem.
     * @example
     * // Update or create a InventoryItem
     * const inventoryItem = await prisma.inventoryItem.upsert({
     *   create: {
     *     // ... data to create a InventoryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InventoryItem we want to update
     *   }
     * })
     */
    upsert<T extends InventoryItemUpsertArgs>(args: SelectSubset<T, InventoryItemUpsertArgs<ExtArgs>>): Prisma__InventoryItemClient<$Result.GetResult<Prisma.$InventoryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InventoryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemCountArgs} args - Arguments to filter InventoryItems to count.
     * @example
     * // Count the number of InventoryItems
     * const count = await prisma.inventoryItem.count({
     *   where: {
     *     // ... the filter for the InventoryItems we want to count
     *   }
     * })
    **/
    count<T extends InventoryItemCountArgs>(
      args?: Subset<T, InventoryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryItemAggregateArgs>(args: Subset<T, InventoryItemAggregateArgs>): Prisma.PrismaPromise<GetInventoryItemAggregateType<T>>

    /**
     * Group by InventoryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryItemGroupByArgs['orderBy'] }
        : { orderBy?: InventoryItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InventoryItem model
   */
  readonly fields: InventoryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InventoryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the InventoryItem model
   */
  interface InventoryItemFieldRefs {
    readonly id: FieldRef<"InventoryItem", 'BigInt'>
    readonly name: FieldRef<"InventoryItem", 'String'>
    readonly category: FieldRef<"InventoryItem", 'String'>
    readonly currentStock: FieldRef<"InventoryItem", 'Float'>
    readonly minStock: FieldRef<"InventoryItem", 'Float'>
    readonly maxStock: FieldRef<"InventoryItem", 'Float'>
    readonly unit: FieldRef<"InventoryItem", 'String'>
    readonly location: FieldRef<"InventoryItem", 'String'>
    readonly cost: FieldRef<"InventoryItem", 'Float'>
    readonly supplier: FieldRef<"InventoryItem", 'String'>
    readonly lastRestocked: FieldRef<"InventoryItem", 'String'>
    readonly createdAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"InventoryItem", 'DateTime'>
    readonly extra: FieldRef<"InventoryItem", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * InventoryItem findUnique
   */
  export type InventoryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findUniqueOrThrow
   */
  export type InventoryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem findFirst
   */
  export type InventoryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findFirstOrThrow
   */
  export type InventoryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter, which InventoryItem to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InventoryItems.
     */
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem findMany
   */
  export type InventoryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter, which InventoryItems to fetch.
     */
    where?: InventoryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InventoryItems to fetch.
     */
    orderBy?: InventoryItemOrderByWithRelationInput | InventoryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InventoryItems.
     */
    cursor?: InventoryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InventoryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InventoryItems.
     */
    skip?: number
    distinct?: InventoryItemScalarFieldEnum | InventoryItemScalarFieldEnum[]
  }

  /**
   * InventoryItem create
   */
  export type InventoryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a InventoryItem.
     */
    data: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
  }

  /**
   * InventoryItem createMany
   */
  export type InventoryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
  }

  /**
   * InventoryItem createManyAndReturn
   */
  export type InventoryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to create many InventoryItems.
     */
    data: InventoryItemCreateManyInput | InventoryItemCreateManyInput[]
  }

  /**
   * InventoryItem update
   */
  export type InventoryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a InventoryItem.
     */
    data: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
    /**
     * Choose, which InventoryItem to update.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem updateMany
   */
  export type InventoryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem updateManyAndReturn
   */
  export type InventoryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The data used to update InventoryItems.
     */
    data: XOR<InventoryItemUpdateManyMutationInput, InventoryItemUncheckedUpdateManyInput>
    /**
     * Filter which InventoryItems to update
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to update.
     */
    limit?: number
  }

  /**
   * InventoryItem upsert
   */
  export type InventoryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the InventoryItem to update in case it exists.
     */
    where: InventoryItemWhereUniqueInput
    /**
     * In case the InventoryItem found by the `where` argument doesn't exist, create a new InventoryItem with this data.
     */
    create: XOR<InventoryItemCreateInput, InventoryItemUncheckedCreateInput>
    /**
     * In case the InventoryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryItemUpdateInput, InventoryItemUncheckedUpdateInput>
  }

  /**
   * InventoryItem delete
   */
  export type InventoryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
    /**
     * Filter which InventoryItem to delete.
     */
    where: InventoryItemWhereUniqueInput
  }

  /**
   * InventoryItem deleteMany
   */
  export type InventoryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InventoryItems to delete
     */
    where?: InventoryItemWhereInput
    /**
     * Limit how many InventoryItems to delete.
     */
    limit?: number
  }

  /**
   * InventoryItem without action
   */
  export type InventoryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryItem
     */
    select?: InventoryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InventoryItem
     */
    omit?: InventoryItemOmit<ExtArgs> | null
  }


  /**
   * Model ChargeCategory
   */

  export type AggregateChargeCategory = {
    _count: ChargeCategoryCountAggregateOutputType | null
    _avg: ChargeCategoryAvgAggregateOutputType | null
    _sum: ChargeCategorySumAggregateOutputType | null
    _min: ChargeCategoryMinAggregateOutputType | null
    _max: ChargeCategoryMaxAggregateOutputType | null
  }

  export type ChargeCategoryAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type ChargeCategorySumAggregateOutputType = {
    id: bigint | null
    amount: number | null
  }

  export type ChargeCategoryMinAggregateOutputType = {
    id: bigint | null
    type: string | null
    name: string | null
    zona: string | null
    description: string | null
    amount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargeCategoryMaxAggregateOutputType = {
    id: bigint | null
    type: string | null
    name: string | null
    zona: string | null
    description: string | null
    amount: number | null
    currency: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChargeCategoryCountAggregateOutputType = {
    id: number
    type: number
    name: number
    zona: number
    description: number
    amount: number
    currency: number
    createdAt: number
    updatedAt: number
    extra: number
    _all: number
  }


  export type ChargeCategoryAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ChargeCategorySumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type ChargeCategoryMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    zona?: true
    description?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargeCategoryMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    zona?: true
    description?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChargeCategoryCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    zona?: true
    description?: true
    amount?: true
    currency?: true
    createdAt?: true
    updatedAt?: true
    extra?: true
    _all?: true
  }

  export type ChargeCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargeCategory to aggregate.
     */
    where?: ChargeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeCategories to fetch.
     */
    orderBy?: ChargeCategoryOrderByWithRelationInput | ChargeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChargeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChargeCategories
    **/
    _count?: true | ChargeCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChargeCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChargeCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChargeCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChargeCategoryMaxAggregateInputType
  }

  export type GetChargeCategoryAggregateType<T extends ChargeCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateChargeCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChargeCategory[P]>
      : GetScalarType<T[P], AggregateChargeCategory[P]>
  }




  export type ChargeCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChargeCategoryWhereInput
    orderBy?: ChargeCategoryOrderByWithAggregationInput | ChargeCategoryOrderByWithAggregationInput[]
    by: ChargeCategoryScalarFieldEnum[] | ChargeCategoryScalarFieldEnum
    having?: ChargeCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChargeCategoryCountAggregateInputType | true
    _avg?: ChargeCategoryAvgAggregateInputType
    _sum?: ChargeCategorySumAggregateInputType
    _min?: ChargeCategoryMinAggregateInputType
    _max?: ChargeCategoryMaxAggregateInputType
  }

  export type ChargeCategoryGroupByOutputType = {
    id: bigint
    type: string
    name: string
    zona: string
    description: string
    amount: number
    currency: string
    createdAt: Date
    updatedAt: Date
    extra: JsonValue | null
    _count: ChargeCategoryCountAggregateOutputType | null
    _avg: ChargeCategoryAvgAggregateOutputType | null
    _sum: ChargeCategorySumAggregateOutputType | null
    _min: ChargeCategoryMinAggregateOutputType | null
    _max: ChargeCategoryMaxAggregateOutputType | null
  }

  type GetChargeCategoryGroupByPayload<T extends ChargeCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChargeCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChargeCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChargeCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], ChargeCategoryGroupByOutputType[P]>
        }
      >
    >


  export type ChargeCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    zona?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["chargeCategory"]>

  export type ChargeCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    zona?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["chargeCategory"]>

  export type ChargeCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    zona?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }, ExtArgs["result"]["chargeCategory"]>

  export type ChargeCategorySelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    zona?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extra?: boolean
  }

  export type ChargeCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "zona" | "description" | "amount" | "currency" | "createdAt" | "updatedAt" | "extra", ExtArgs["result"]["chargeCategory"]>

  export type $ChargeCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChargeCategory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      type: string
      name: string
      zona: string
      description: string
      amount: number
      currency: string
      createdAt: Date
      updatedAt: Date
      extra: Prisma.JsonValue | null
    }, ExtArgs["result"]["chargeCategory"]>
    composites: {}
  }

  type ChargeCategoryGetPayload<S extends boolean | null | undefined | ChargeCategoryDefaultArgs> = $Result.GetResult<Prisma.$ChargeCategoryPayload, S>

  type ChargeCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChargeCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChargeCategoryCountAggregateInputType | true
    }

  export interface ChargeCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChargeCategory'], meta: { name: 'ChargeCategory' } }
    /**
     * Find zero or one ChargeCategory that matches the filter.
     * @param {ChargeCategoryFindUniqueArgs} args - Arguments to find a ChargeCategory
     * @example
     * // Get one ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChargeCategoryFindUniqueArgs>(args: SelectSubset<T, ChargeCategoryFindUniqueArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChargeCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChargeCategoryFindUniqueOrThrowArgs} args - Arguments to find a ChargeCategory
     * @example
     * // Get one ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChargeCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ChargeCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargeCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryFindFirstArgs} args - Arguments to find a ChargeCategory
     * @example
     * // Get one ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChargeCategoryFindFirstArgs>(args?: SelectSubset<T, ChargeCategoryFindFirstArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChargeCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryFindFirstOrThrowArgs} args - Arguments to find a ChargeCategory
     * @example
     * // Get one ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChargeCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ChargeCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChargeCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChargeCategories
     * const chargeCategories = await prisma.chargeCategory.findMany()
     * 
     * // Get first 10 ChargeCategories
     * const chargeCategories = await prisma.chargeCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chargeCategoryWithIdOnly = await prisma.chargeCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChargeCategoryFindManyArgs>(args?: SelectSubset<T, ChargeCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChargeCategory.
     * @param {ChargeCategoryCreateArgs} args - Arguments to create a ChargeCategory.
     * @example
     * // Create one ChargeCategory
     * const ChargeCategory = await prisma.chargeCategory.create({
     *   data: {
     *     // ... data to create a ChargeCategory
     *   }
     * })
     * 
     */
    create<T extends ChargeCategoryCreateArgs>(args: SelectSubset<T, ChargeCategoryCreateArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChargeCategories.
     * @param {ChargeCategoryCreateManyArgs} args - Arguments to create many ChargeCategories.
     * @example
     * // Create many ChargeCategories
     * const chargeCategory = await prisma.chargeCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChargeCategoryCreateManyArgs>(args?: SelectSubset<T, ChargeCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChargeCategories and returns the data saved in the database.
     * @param {ChargeCategoryCreateManyAndReturnArgs} args - Arguments to create many ChargeCategories.
     * @example
     * // Create many ChargeCategories
     * const chargeCategory = await prisma.chargeCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChargeCategories and only return the `id`
     * const chargeCategoryWithIdOnly = await prisma.chargeCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChargeCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ChargeCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChargeCategory.
     * @param {ChargeCategoryDeleteArgs} args - Arguments to delete one ChargeCategory.
     * @example
     * // Delete one ChargeCategory
     * const ChargeCategory = await prisma.chargeCategory.delete({
     *   where: {
     *     // ... filter to delete one ChargeCategory
     *   }
     * })
     * 
     */
    delete<T extends ChargeCategoryDeleteArgs>(args: SelectSubset<T, ChargeCategoryDeleteArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChargeCategory.
     * @param {ChargeCategoryUpdateArgs} args - Arguments to update one ChargeCategory.
     * @example
     * // Update one ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChargeCategoryUpdateArgs>(args: SelectSubset<T, ChargeCategoryUpdateArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChargeCategories.
     * @param {ChargeCategoryDeleteManyArgs} args - Arguments to filter ChargeCategories to delete.
     * @example
     * // Delete a few ChargeCategories
     * const { count } = await prisma.chargeCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChargeCategoryDeleteManyArgs>(args?: SelectSubset<T, ChargeCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChargeCategories
     * const chargeCategory = await prisma.chargeCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChargeCategoryUpdateManyArgs>(args: SelectSubset<T, ChargeCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChargeCategories and returns the data updated in the database.
     * @param {ChargeCategoryUpdateManyAndReturnArgs} args - Arguments to update many ChargeCategories.
     * @example
     * // Update many ChargeCategories
     * const chargeCategory = await prisma.chargeCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChargeCategories and only return the `id`
     * const chargeCategoryWithIdOnly = await prisma.chargeCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChargeCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ChargeCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChargeCategory.
     * @param {ChargeCategoryUpsertArgs} args - Arguments to update or create a ChargeCategory.
     * @example
     * // Update or create a ChargeCategory
     * const chargeCategory = await prisma.chargeCategory.upsert({
     *   create: {
     *     // ... data to create a ChargeCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChargeCategory we want to update
     *   }
     * })
     */
    upsert<T extends ChargeCategoryUpsertArgs>(args: SelectSubset<T, ChargeCategoryUpsertArgs<ExtArgs>>): Prisma__ChargeCategoryClient<$Result.GetResult<Prisma.$ChargeCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChargeCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryCountArgs} args - Arguments to filter ChargeCategories to count.
     * @example
     * // Count the number of ChargeCategories
     * const count = await prisma.chargeCategory.count({
     *   where: {
     *     // ... the filter for the ChargeCategories we want to count
     *   }
     * })
    **/
    count<T extends ChargeCategoryCountArgs>(
      args?: Subset<T, ChargeCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChargeCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChargeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChargeCategoryAggregateArgs>(args: Subset<T, ChargeCategoryAggregateArgs>): Prisma.PrismaPromise<GetChargeCategoryAggregateType<T>>

    /**
     * Group by ChargeCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChargeCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChargeCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChargeCategoryGroupByArgs['orderBy'] }
        : { orderBy?: ChargeCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChargeCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChargeCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChargeCategory model
   */
  readonly fields: ChargeCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChargeCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChargeCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChargeCategory model
   */
  interface ChargeCategoryFieldRefs {
    readonly id: FieldRef<"ChargeCategory", 'BigInt'>
    readonly type: FieldRef<"ChargeCategory", 'String'>
    readonly name: FieldRef<"ChargeCategory", 'String'>
    readonly zona: FieldRef<"ChargeCategory", 'String'>
    readonly description: FieldRef<"ChargeCategory", 'String'>
    readonly amount: FieldRef<"ChargeCategory", 'Float'>
    readonly currency: FieldRef<"ChargeCategory", 'String'>
    readonly createdAt: FieldRef<"ChargeCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"ChargeCategory", 'DateTime'>
    readonly extra: FieldRef<"ChargeCategory", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ChargeCategory findUnique
   */
  export type ChargeCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ChargeCategory to fetch.
     */
    where: ChargeCategoryWhereUniqueInput
  }

  /**
   * ChargeCategory findUniqueOrThrow
   */
  export type ChargeCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ChargeCategory to fetch.
     */
    where: ChargeCategoryWhereUniqueInput
  }

  /**
   * ChargeCategory findFirst
   */
  export type ChargeCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ChargeCategory to fetch.
     */
    where?: ChargeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeCategories to fetch.
     */
    orderBy?: ChargeCategoryOrderByWithRelationInput | ChargeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargeCategories.
     */
    cursor?: ChargeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargeCategories.
     */
    distinct?: ChargeCategoryScalarFieldEnum | ChargeCategoryScalarFieldEnum[]
  }

  /**
   * ChargeCategory findFirstOrThrow
   */
  export type ChargeCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ChargeCategory to fetch.
     */
    where?: ChargeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeCategories to fetch.
     */
    orderBy?: ChargeCategoryOrderByWithRelationInput | ChargeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChargeCategories.
     */
    cursor?: ChargeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChargeCategories.
     */
    distinct?: ChargeCategoryScalarFieldEnum | ChargeCategoryScalarFieldEnum[]
  }

  /**
   * ChargeCategory findMany
   */
  export type ChargeCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter, which ChargeCategories to fetch.
     */
    where?: ChargeCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChargeCategories to fetch.
     */
    orderBy?: ChargeCategoryOrderByWithRelationInput | ChargeCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChargeCategories.
     */
    cursor?: ChargeCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChargeCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChargeCategories.
     */
    skip?: number
    distinct?: ChargeCategoryScalarFieldEnum | ChargeCategoryScalarFieldEnum[]
  }

  /**
   * ChargeCategory create
   */
  export type ChargeCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * The data needed to create a ChargeCategory.
     */
    data: XOR<ChargeCategoryCreateInput, ChargeCategoryUncheckedCreateInput>
  }

  /**
   * ChargeCategory createMany
   */
  export type ChargeCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChargeCategories.
     */
    data: ChargeCategoryCreateManyInput | ChargeCategoryCreateManyInput[]
  }

  /**
   * ChargeCategory createManyAndReturn
   */
  export type ChargeCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many ChargeCategories.
     */
    data: ChargeCategoryCreateManyInput | ChargeCategoryCreateManyInput[]
  }

  /**
   * ChargeCategory update
   */
  export type ChargeCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * The data needed to update a ChargeCategory.
     */
    data: XOR<ChargeCategoryUpdateInput, ChargeCategoryUncheckedUpdateInput>
    /**
     * Choose, which ChargeCategory to update.
     */
    where: ChargeCategoryWhereUniqueInput
  }

  /**
   * ChargeCategory updateMany
   */
  export type ChargeCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChargeCategories.
     */
    data: XOR<ChargeCategoryUpdateManyMutationInput, ChargeCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ChargeCategories to update
     */
    where?: ChargeCategoryWhereInput
    /**
     * Limit how many ChargeCategories to update.
     */
    limit?: number
  }

  /**
   * ChargeCategory updateManyAndReturn
   */
  export type ChargeCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * The data used to update ChargeCategories.
     */
    data: XOR<ChargeCategoryUpdateManyMutationInput, ChargeCategoryUncheckedUpdateManyInput>
    /**
     * Filter which ChargeCategories to update
     */
    where?: ChargeCategoryWhereInput
    /**
     * Limit how many ChargeCategories to update.
     */
    limit?: number
  }

  /**
   * ChargeCategory upsert
   */
  export type ChargeCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * The filter to search for the ChargeCategory to update in case it exists.
     */
    where: ChargeCategoryWhereUniqueInput
    /**
     * In case the ChargeCategory found by the `where` argument doesn't exist, create a new ChargeCategory with this data.
     */
    create: XOR<ChargeCategoryCreateInput, ChargeCategoryUncheckedCreateInput>
    /**
     * In case the ChargeCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChargeCategoryUpdateInput, ChargeCategoryUncheckedUpdateInput>
  }

  /**
   * ChargeCategory delete
   */
  export type ChargeCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
    /**
     * Filter which ChargeCategory to delete.
     */
    where: ChargeCategoryWhereUniqueInput
  }

  /**
   * ChargeCategory deleteMany
   */
  export type ChargeCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChargeCategories to delete
     */
    where?: ChargeCategoryWhereInput
    /**
     * Limit how many ChargeCategories to delete.
     */
    limit?: number
  }

  /**
   * ChargeCategory without action
   */
  export type ChargeCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChargeCategory
     */
    select?: ChargeCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChargeCategory
     */
    omit?: ChargeCategoryOmit<ExtArgs> | null
  }


  /**
   * Model AppSetting
   */

  export type AggregateAppSetting = {
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  export type AppSettingMinAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type AppSettingMaxAggregateOutputType = {
    key: string | null
    updatedAt: Date | null
  }

  export type AppSettingCountAggregateOutputType = {
    key: number
    value: number
    updatedAt: number
    _all: number
  }


  export type AppSettingMinAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type AppSettingMaxAggregateInputType = {
    key?: true
    updatedAt?: true
  }

  export type AppSettingCountAggregateInputType = {
    key?: true
    value?: true
    updatedAt?: true
    _all?: true
  }

  export type AppSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSetting to aggregate.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppSettings
    **/
    _count?: true | AppSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppSettingMaxAggregateInputType
  }

  export type GetAppSettingAggregateType<T extends AppSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateAppSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppSetting[P]>
      : GetScalarType<T[P], AggregateAppSetting[P]>
  }




  export type AppSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppSettingWhereInput
    orderBy?: AppSettingOrderByWithAggregationInput | AppSettingOrderByWithAggregationInput[]
    by: AppSettingScalarFieldEnum[] | AppSettingScalarFieldEnum
    having?: AppSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppSettingCountAggregateInputType | true
    _min?: AppSettingMinAggregateInputType
    _max?: AppSettingMaxAggregateInputType
  }

  export type AppSettingGroupByOutputType = {
    key: string
    value: JsonValue
    updatedAt: Date
    _count: AppSettingCountAggregateOutputType | null
    _min: AppSettingMinAggregateOutputType | null
    _max: AppSettingMaxAggregateOutputType | null
  }

  type GetAppSettingGroupByPayload<T extends AppSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
            : GetScalarType<T[P], AppSettingGroupByOutputType[P]>
        }
      >
    >


  export type AppSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["appSetting"]>

  export type AppSettingSelectScalar = {
    key?: boolean
    value?: boolean
    updatedAt?: boolean
  }

  export type AppSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"key" | "value" | "updatedAt", ExtArgs["result"]["appSetting"]>

  export type $AppSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppSetting"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      key: string
      value: Prisma.JsonValue
      updatedAt: Date
    }, ExtArgs["result"]["appSetting"]>
    composites: {}
  }

  type AppSettingGetPayload<S extends boolean | null | undefined | AppSettingDefaultArgs> = $Result.GetResult<Prisma.$AppSettingPayload, S>

  type AppSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppSettingCountAggregateInputType | true
    }

  export interface AppSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppSetting'], meta: { name: 'AppSetting' } }
    /**
     * Find zero or one AppSetting that matches the filter.
     * @param {AppSettingFindUniqueArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppSettingFindUniqueArgs>(args: SelectSubset<T, AppSettingFindUniqueArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppSettingFindUniqueOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, AppSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppSettingFindFirstArgs>(args?: SelectSubset<T, AppSettingFindFirstArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindFirstOrThrowArgs} args - Arguments to find a AppSetting
     * @example
     * // Get one AppSetting
     * const appSetting = await prisma.appSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, AppSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppSettings
     * const appSettings = await prisma.appSetting.findMany()
     * 
     * // Get first 10 AppSettings
     * const appSettings = await prisma.appSetting.findMany({ take: 10 })
     * 
     * // Only select the `key`
     * const appSettingWithKeyOnly = await prisma.appSetting.findMany({ select: { key: true } })
     * 
     */
    findMany<T extends AppSettingFindManyArgs>(args?: SelectSubset<T, AppSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppSetting.
     * @param {AppSettingCreateArgs} args - Arguments to create a AppSetting.
     * @example
     * // Create one AppSetting
     * const AppSetting = await prisma.appSetting.create({
     *   data: {
     *     // ... data to create a AppSetting
     *   }
     * })
     * 
     */
    create<T extends AppSettingCreateArgs>(args: SelectSubset<T, AppSettingCreateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppSettings.
     * @param {AppSettingCreateManyArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppSettingCreateManyArgs>(args?: SelectSubset<T, AppSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AppSettings and returns the data saved in the database.
     * @param {AppSettingCreateManyAndReturnArgs} args - Arguments to create many AppSettings.
     * @example
     * // Create many AppSettings
     * const appSetting = await prisma.appSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AppSettings and only return the `key`
     * const appSettingWithKeyOnly = await prisma.appSetting.createManyAndReturn({
     *   select: { key: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AppSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, AppSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AppSetting.
     * @param {AppSettingDeleteArgs} args - Arguments to delete one AppSetting.
     * @example
     * // Delete one AppSetting
     * const AppSetting = await prisma.appSetting.delete({
     *   where: {
     *     // ... filter to delete one AppSetting
     *   }
     * })
     * 
     */
    delete<T extends AppSettingDeleteArgs>(args: SelectSubset<T, AppSettingDeleteArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppSetting.
     * @param {AppSettingUpdateArgs} args - Arguments to update one AppSetting.
     * @example
     * // Update one AppSetting
     * const appSetting = await prisma.appSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppSettingUpdateArgs>(args: SelectSubset<T, AppSettingUpdateArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppSettings.
     * @param {AppSettingDeleteManyArgs} args - Arguments to filter AppSettings to delete.
     * @example
     * // Delete a few AppSettings
     * const { count } = await prisma.appSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppSettingDeleteManyArgs>(args?: SelectSubset<T, AppSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppSettingUpdateManyArgs>(args: SelectSubset<T, AppSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppSettings and returns the data updated in the database.
     * @param {AppSettingUpdateManyAndReturnArgs} args - Arguments to update many AppSettings.
     * @example
     * // Update many AppSettings
     * const appSetting = await prisma.appSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AppSettings and only return the `key`
     * const appSettingWithKeyOnly = await prisma.appSetting.updateManyAndReturn({
     *   select: { key: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AppSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, AppSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AppSetting.
     * @param {AppSettingUpsertArgs} args - Arguments to update or create a AppSetting.
     * @example
     * // Update or create a AppSetting
     * const appSetting = await prisma.appSetting.upsert({
     *   create: {
     *     // ... data to create a AppSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppSetting we want to update
     *   }
     * })
     */
    upsert<T extends AppSettingUpsertArgs>(args: SelectSubset<T, AppSettingUpsertArgs<ExtArgs>>): Prisma__AppSettingClient<$Result.GetResult<Prisma.$AppSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingCountArgs} args - Arguments to filter AppSettings to count.
     * @example
     * // Count the number of AppSettings
     * const count = await prisma.appSetting.count({
     *   where: {
     *     // ... the filter for the AppSettings we want to count
     *   }
     * })
    **/
    count<T extends AppSettingCountArgs>(
      args?: Subset<T, AppSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppSettingAggregateArgs>(args: Subset<T, AppSettingAggregateArgs>): Prisma.PrismaPromise<GetAppSettingAggregateType<T>>

    /**
     * Group by AppSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppSettingGroupByArgs['orderBy'] }
        : { orderBy?: AppSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppSetting model
   */
  readonly fields: AppSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AppSetting model
   */
  interface AppSettingFieldRefs {
    readonly key: FieldRef<"AppSetting", 'String'>
    readonly value: FieldRef<"AppSetting", 'Json'>
    readonly updatedAt: FieldRef<"AppSetting", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppSetting findUnique
   */
  export type AppSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findUniqueOrThrow
   */
  export type AppSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting findFirst
   */
  export type AppSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findFirstOrThrow
   */
  export type AppSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSetting to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppSettings.
     */
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting findMany
   */
  export type AppSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter, which AppSettings to fetch.
     */
    where?: AppSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppSettings to fetch.
     */
    orderBy?: AppSettingOrderByWithRelationInput | AppSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppSettings.
     */
    cursor?: AppSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppSettings.
     */
    skip?: number
    distinct?: AppSettingScalarFieldEnum | AppSettingScalarFieldEnum[]
  }

  /**
   * AppSetting create
   */
  export type AppSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to create a AppSetting.
     */
    data: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
  }

  /**
   * AppSetting createMany
   */
  export type AppSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
  }

  /**
   * AppSetting createManyAndReturn
   */
  export type AppSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to create many AppSettings.
     */
    data: AppSettingCreateManyInput | AppSettingCreateManyInput[]
  }

  /**
   * AppSetting update
   */
  export type AppSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data needed to update a AppSetting.
     */
    data: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
    /**
     * Choose, which AppSetting to update.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting updateMany
   */
  export type AppSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting updateManyAndReturn
   */
  export type AppSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The data used to update AppSettings.
     */
    data: XOR<AppSettingUpdateManyMutationInput, AppSettingUncheckedUpdateManyInput>
    /**
     * Filter which AppSettings to update
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to update.
     */
    limit?: number
  }

  /**
   * AppSetting upsert
   */
  export type AppSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * The filter to search for the AppSetting to update in case it exists.
     */
    where: AppSettingWhereUniqueInput
    /**
     * In case the AppSetting found by the `where` argument doesn't exist, create a new AppSetting with this data.
     */
    create: XOR<AppSettingCreateInput, AppSettingUncheckedCreateInput>
    /**
     * In case the AppSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppSettingUpdateInput, AppSettingUncheckedUpdateInput>
  }

  /**
   * AppSetting delete
   */
  export type AppSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
    /**
     * Filter which AppSetting to delete.
     */
    where: AppSettingWhereUniqueInput
  }

  /**
   * AppSetting deleteMany
   */
  export type AppSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppSettings to delete
     */
    where?: AppSettingWhereInput
    /**
     * Limit how many AppSettings to delete.
     */
    limit?: number
  }

  /**
   * AppSetting without action
   */
  export type AppSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppSetting
     */
    select?: AppSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppSetting
     */
    omit?: AppSettingOmit<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoAvgAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
  }

  export type PhotoSumAggregateOutputType = {
    size: number | null
    width: number | null
    height: number | null
  }

  export type PhotoMinAggregateOutputType = {
    id: string | null
    propertyId: string | null
    mimeType: string | null
    size: number | null
    width: number | null
    height: number | null
    data: Bytes | null
    createdAt: Date | null
  }

  export type PhotoMaxAggregateOutputType = {
    id: string | null
    propertyId: string | null
    mimeType: string | null
    size: number | null
    width: number | null
    height: number | null
    data: Bytes | null
    createdAt: Date | null
  }

  export type PhotoCountAggregateOutputType = {
    id: number
    propertyId: number
    mimeType: number
    size: number
    width: number
    height: number
    data: number
    createdAt: number
    _all: number
  }


  export type PhotoAvgAggregateInputType = {
    size?: true
    width?: true
    height?: true
  }

  export type PhotoSumAggregateInputType = {
    size?: true
    width?: true
    height?: true
  }

  export type PhotoMinAggregateInputType = {
    id?: true
    propertyId?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    data?: true
    createdAt?: true
  }

  export type PhotoMaxAggregateInputType = {
    id?: true
    propertyId?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    data?: true
    createdAt?: true
  }

  export type PhotoCountAggregateInputType = {
    id?: true
    propertyId?: true
    mimeType?: true
    size?: true
    width?: true
    height?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _avg?: PhotoAvgAggregateInputType
    _sum?: PhotoSumAggregateInputType
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    id: string
    propertyId: string | null
    mimeType: string
    size: number
    width: number | null
    height: number | null
    data: Bytes
    createdAt: Date
    _count: PhotoCountAggregateOutputType | null
    _avg: PhotoAvgAggregateOutputType | null
    _sum: PhotoSumAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    data?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    id?: boolean
    propertyId?: boolean
    mimeType?: boolean
    size?: boolean
    width?: boolean
    height?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type PhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "mimeType" | "size" | "width" | "height" | "data" | "createdAt", ExtArgs["result"]["photo"]>

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propertyId: string | null
      mimeType: string
      size: number
      width: number | null
      height: number | null
      data: Prisma.Bytes
      createdAt: Date
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoWithIdOnly = await prisma.photo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos and returns the data updated in the database.
     * @param {PhotoUpdateManyAndReturnArgs} args - Arguments to update many Photos.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Photos and only return the `id`
     * const photoWithIdOnly = await prisma.photo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, PhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */
  interface PhotoFieldRefs {
    readonly id: FieldRef<"Photo", 'String'>
    readonly propertyId: FieldRef<"Photo", 'String'>
    readonly mimeType: FieldRef<"Photo", 'String'>
    readonly size: FieldRef<"Photo", 'Int'>
    readonly width: FieldRef<"Photo", 'Int'>
    readonly height: FieldRef<"Photo", 'Int'>
    readonly data: FieldRef<"Photo", 'Bytes'>
    readonly createdAt: FieldRef<"Photo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo updateManyAndReturn
   */
  export type PhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to update.
     */
    limit?: number
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
    /**
     * Limit how many Photos to delete.
     */
    limit?: number
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Photo
     */
    omit?: PhotoOmit<ExtArgs> | null
  }


  /**
   * Model Video
   */

  export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  export type VideoAvgAggregateOutputType = {
    size: number | null
  }

  export type VideoSumAggregateOutputType = {
    size: number | null
  }

  export type VideoMinAggregateOutputType = {
    id: string | null
    reservationId: string | null
    fileName: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
  }

  export type VideoMaxAggregateOutputType = {
    id: string | null
    reservationId: string | null
    fileName: string | null
    mimeType: string | null
    size: number | null
    createdAt: Date | null
  }

  export type VideoCountAggregateOutputType = {
    id: number
    reservationId: number
    fileName: number
    mimeType: number
    size: number
    createdAt: number
    _all: number
  }


  export type VideoAvgAggregateInputType = {
    size?: true
  }

  export type VideoSumAggregateInputType = {
    size?: true
  }

  export type VideoMinAggregateInputType = {
    id?: true
    reservationId?: true
    fileName?: true
    mimeType?: true
    size?: true
    createdAt?: true
  }

  export type VideoMaxAggregateInputType = {
    id?: true
    reservationId?: true
    fileName?: true
    mimeType?: true
    size?: true
    createdAt?: true
  }

  export type VideoCountAggregateInputType = {
    id?: true
    reservationId?: true
    fileName?: true
    mimeType?: true
    size?: true
    createdAt?: true
    _all?: true
  }

  export type VideoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Video to aggregate.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Videos
    **/
    _count?: true | VideoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoMaxAggregateInputType
  }

  export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
        [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideo[P]>
      : GetScalarType<T[P], AggregateVideo[P]>
  }




  export type VideoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoWhereInput
    orderBy?: VideoOrderByWithAggregationInput | VideoOrderByWithAggregationInput[]
    by: VideoScalarFieldEnum[] | VideoScalarFieldEnum
    having?: VideoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCountAggregateInputType | true
    _avg?: VideoAvgAggregateInputType
    _sum?: VideoSumAggregateInputType
    _min?: VideoMinAggregateInputType
    _max?: VideoMaxAggregateInputType
  }

  export type VideoGroupByOutputType = {
    id: string
    reservationId: string | null
    fileName: string
    mimeType: string
    size: number
    createdAt: Date
    _count: VideoCountAggregateOutputType | null
    _avg: VideoAvgAggregateOutputType | null
    _sum: VideoSumAggregateOutputType | null
    _min: VideoMinAggregateOutputType | null
    _max: VideoMaxAggregateOutputType | null
  }

  type GetVideoGroupByPayload<T extends VideoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoGroupByOutputType[P]>
            : GetScalarType<T[P], VideoGroupByOutputType[P]>
        }
      >
    >


  export type VideoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    fileName?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    fileName?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservationId?: boolean
    fileName?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["video"]>

  export type VideoSelectScalar = {
    id?: boolean
    reservationId?: boolean
    fileName?: boolean
    mimeType?: boolean
    size?: boolean
    createdAt?: boolean
  }

  export type VideoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservationId" | "fileName" | "mimeType" | "size" | "createdAt", ExtArgs["result"]["video"]>

  export type $VideoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Video"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reservationId: string | null
      fileName: string
      mimeType: string
      size: number
      createdAt: Date
    }, ExtArgs["result"]["video"]>
    composites: {}
  }

  type VideoGetPayload<S extends boolean | null | undefined | VideoDefaultArgs> = $Result.GetResult<Prisma.$VideoPayload, S>

  type VideoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCountAggregateInputType | true
    }

  export interface VideoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Video'], meta: { name: 'Video' } }
    /**
     * Find zero or one Video that matches the filter.
     * @param {VideoFindUniqueArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoFindUniqueArgs>(args: SelectSubset<T, VideoFindUniqueArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Video that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoFindUniqueOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoFindFirstArgs>(args?: SelectSubset<T, VideoFindFirstArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Video that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindFirstOrThrowArgs} args - Arguments to find a Video
     * @example
     * // Get one Video
     * const video = await prisma.video.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Videos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Videos
     * const videos = await prisma.video.findMany()
     * 
     * // Get first 10 Videos
     * const videos = await prisma.video.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoWithIdOnly = await prisma.video.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoFindManyArgs>(args?: SelectSubset<T, VideoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Video.
     * @param {VideoCreateArgs} args - Arguments to create a Video.
     * @example
     * // Create one Video
     * const Video = await prisma.video.create({
     *   data: {
     *     // ... data to create a Video
     *   }
     * })
     * 
     */
    create<T extends VideoCreateArgs>(args: SelectSubset<T, VideoCreateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Videos.
     * @param {VideoCreateManyArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCreateManyArgs>(args?: SelectSubset<T, VideoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Videos and returns the data saved in the database.
     * @param {VideoCreateManyAndReturnArgs} args - Arguments to create many Videos.
     * @example
     * // Create many Videos
     * const video = await prisma.video.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Video.
     * @param {VideoDeleteArgs} args - Arguments to delete one Video.
     * @example
     * // Delete one Video
     * const Video = await prisma.video.delete({
     *   where: {
     *     // ... filter to delete one Video
     *   }
     * })
     * 
     */
    delete<T extends VideoDeleteArgs>(args: SelectSubset<T, VideoDeleteArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Video.
     * @param {VideoUpdateArgs} args - Arguments to update one Video.
     * @example
     * // Update one Video
     * const video = await prisma.video.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoUpdateArgs>(args: SelectSubset<T, VideoUpdateArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Videos.
     * @param {VideoDeleteManyArgs} args - Arguments to filter Videos to delete.
     * @example
     * // Delete a few Videos
     * const { count } = await prisma.video.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoDeleteManyArgs>(args?: SelectSubset<T, VideoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoUpdateManyArgs>(args: SelectSubset<T, VideoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Videos and returns the data updated in the database.
     * @param {VideoUpdateManyAndReturnArgs} args - Arguments to update many Videos.
     * @example
     * // Update many Videos
     * const video = await prisma.video.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Videos and only return the `id`
     * const videoWithIdOnly = await prisma.video.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Video.
     * @param {VideoUpsertArgs} args - Arguments to update or create a Video.
     * @example
     * // Update or create a Video
     * const video = await prisma.video.upsert({
     *   create: {
     *     // ... data to create a Video
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Video we want to update
     *   }
     * })
     */
    upsert<T extends VideoUpsertArgs>(args: SelectSubset<T, VideoUpsertArgs<ExtArgs>>): Prisma__VideoClient<$Result.GetResult<Prisma.$VideoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Videos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCountArgs} args - Arguments to filter Videos to count.
     * @example
     * // Count the number of Videos
     * const count = await prisma.video.count({
     *   where: {
     *     // ... the filter for the Videos we want to count
     *   }
     * })
    **/
    count<T extends VideoCountArgs>(
      args?: Subset<T, VideoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoAggregateArgs>(args: Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>

    /**
     * Group by Video.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoGroupByArgs['orderBy'] }
        : { orderBy?: VideoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Video model
   */
  readonly fields: VideoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Video.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Video model
   */
  interface VideoFieldRefs {
    readonly id: FieldRef<"Video", 'String'>
    readonly reservationId: FieldRef<"Video", 'String'>
    readonly fileName: FieldRef<"Video", 'String'>
    readonly mimeType: FieldRef<"Video", 'String'>
    readonly size: FieldRef<"Video", 'Int'>
    readonly createdAt: FieldRef<"Video", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Video findUnique
   */
  export type VideoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findUniqueOrThrow
   */
  export type VideoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video findFirst
   */
  export type VideoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findFirstOrThrow
   */
  export type VideoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Video to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Videos.
     */
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video findMany
   */
  export type VideoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter, which Videos to fetch.
     */
    where?: VideoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Videos to fetch.
     */
    orderBy?: VideoOrderByWithRelationInput | VideoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Videos.
     */
    cursor?: VideoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Videos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Videos.
     */
    skip?: number
    distinct?: VideoScalarFieldEnum | VideoScalarFieldEnum[]
  }

  /**
   * Video create
   */
  export type VideoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data needed to create a Video.
     */
    data: XOR<VideoCreateInput, VideoUncheckedCreateInput>
  }

  /**
   * Video createMany
   */
  export type VideoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video createManyAndReturn
   */
  export type VideoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to create many Videos.
     */
    data: VideoCreateManyInput | VideoCreateManyInput[]
  }

  /**
   * Video update
   */
  export type VideoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data needed to update a Video.
     */
    data: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
    /**
     * Choose, which Video to update.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video updateMany
   */
  export type VideoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video updateManyAndReturn
   */
  export type VideoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The data used to update Videos.
     */
    data: XOR<VideoUpdateManyMutationInput, VideoUncheckedUpdateManyInput>
    /**
     * Filter which Videos to update
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to update.
     */
    limit?: number
  }

  /**
   * Video upsert
   */
  export type VideoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * The filter to search for the Video to update in case it exists.
     */
    where: VideoWhereUniqueInput
    /**
     * In case the Video found by the `where` argument doesn't exist, create a new Video with this data.
     */
    create: XOR<VideoCreateInput, VideoUncheckedCreateInput>
    /**
     * In case the Video was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoUpdateInput, VideoUncheckedUpdateInput>
  }

  /**
   * Video delete
   */
  export type VideoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
    /**
     * Filter which Video to delete.
     */
    where: VideoWhereUniqueInput
  }

  /**
   * Video deleteMany
   */
  export type VideoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Videos to delete
     */
    where?: VideoWhereInput
    /**
     * Limit how many Videos to delete.
     */
    limit?: number
  }

  /**
   * Video without action
   */
  export type VideoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Video
     */
    select?: VideoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Video
     */
    omit?: VideoOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    userType: 'userType',
    username: 'username',
    name: 'name',
    lastName: 'lastName',
    phone: 'phone',
    email: 'email',
    passwordHash: 'passwordHash',
    enabled: 'enabled',
    extra: 'extra',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    category: 'category',
    name: 'name',
    zona: 'zona',
    address: 'address',
    number: 'number',
    floor: 'floor',
    apartment: 'apartment',
    description: 'description',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    maxGuests: 'maxGuests',
    propertyType: 'propertyType',
    ambientes: 'ambientes',
    checkInFrom: 'checkInFrom',
    checkInTo: 'checkInTo',
    checkOutFrom: 'checkOutFrom',
    checkOutTo: 'checkOutTo',
    beds: 'beds',
    amenities: 'amenities',
    mtsDelMar: 'mtsDelMar',
    mascotasCantidad: 'mascotasCantidad',
    chargesCurrency: 'chargesCurrency',
    charges: 'charges',
    wifiNetwork: 'wifiNetwork',
    wifiPassword: 'wifiPassword',
    keysCount: 'keysCount',
    electronicKey: 'electronicKey',
    keyCode: 'keyCode',
    bookingId: 'bookingId',
    airbnbId: 'airbnbId',
    bank: 'bank',
    photos: 'photos',
    enabled: 'enabled',
    eliminado: 'eliminado',
    createdAt: 'createdAt',
    deletedAt: 'deletedAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    status: 'status',
    propertyId: 'propertyId',
    propertyName: 'propertyName',
    checkInDate: 'checkInDate',
    checkOutDate: 'checkOutDate',
    checkInTime: 'checkInTime',
    checkOutTime: 'checkOutTime',
    guests: 'guests',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    docType: 'docType',
    dni: 'dni',
    hasAttachment: 'hasAttachment',
    attachmentName: 'attachmentName',
    dniException: 'dniException',
    senaException: 'senaException',
    hasPaymentProof: 'hasPaymentProof',
    paymentProofName: 'paymentProofName',
    hasVideo: 'hasVideo',
    videoName: 'videoName',
    videoUrl: 'videoUrl',
    observaciones: 'observaciones',
    currency: 'currency',
    channel: 'channel',
    condition: 'condition',
    nights: 'nights',
    valorNoches: 'valorNoches',
    mascotasEnabled: 'mascotasEnabled',
    mascotasQty: 'mascotasQty',
    mascotasValue: 'mascotasValue',
    cocheraEnabled: 'cocheraEnabled',
    cocheraId: 'cocheraId',
    cocheraValue: 'cocheraValue',
    descuento: 'descuento',
    totalNeto: 'totalNeto',
    cargos: 'cargos',
    totalBruto: 'totalBruto',
    senaPct: 'senaPct',
    senaValue: 'senaValue',
    restante: 'restante',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const RateEntryScalarFieldEnum: {
    propertyId: 'propertyId',
    date: 'date',
    price: 'price',
    available: 'available',
    status: 'status',
    closedUntil: 'closedUntil',
    planIds: 'planIds',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type RateEntryScalarFieldEnum = (typeof RateEntryScalarFieldEnum)[keyof typeof RateEntryScalarFieldEnum]


  export const RatePlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    color: 'color',
    hasMinNights: 'hasMinNights',
    minNights: 'minNights',
    hasPerDayNights: 'hasPerDayNights',
    perDayNights: 'perDayNights',
    priceVariation: 'priceVariation',
    priceVariationType: 'priceVariationType',
    hasStayDiscount: 'hasStayDiscount',
    stayDiscounts: 'stayDiscounts',
    proximityDiscounts: 'proximityDiscounts',
    weekendSurcharge: 'weekendSurcharge',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type RatePlanScalarFieldEnum = (typeof RatePlanScalarFieldEnum)[keyof typeof RatePlanScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    date: 'date',
    category: 'category',
    unit: 'unit',
    receipt: 'receipt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const InventoryItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category',
    currentStock: 'currentStock',
    minStock: 'minStock',
    maxStock: 'maxStock',
    unit: 'unit',
    location: 'location',
    cost: 'cost',
    supplier: 'supplier',
    lastRestocked: 'lastRestocked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type InventoryItemScalarFieldEnum = (typeof InventoryItemScalarFieldEnum)[keyof typeof InventoryItemScalarFieldEnum]


  export const ChargeCategoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    zona: 'zona',
    description: 'description',
    amount: 'amount',
    currency: 'currency',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extra: 'extra'
  };

  export type ChargeCategoryScalarFieldEnum = (typeof ChargeCategoryScalarFieldEnum)[keyof typeof ChargeCategoryScalarFieldEnum]


  export const AppSettingScalarFieldEnum: {
    key: 'key',
    value: 'value',
    updatedAt: 'updatedAt'
  };

  export type AppSettingScalarFieldEnum = (typeof AppSettingScalarFieldEnum)[keyof typeof AppSettingScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    mimeType: 'mimeType',
    size: 'size',
    width: 'width',
    height: 'height',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const VideoScalarFieldEnum: {
    id: 'id',
    reservationId: 'reservationId',
    fileName: 'fileName',
    mimeType: 'mimeType',
    size: 'size',
    createdAt: 'createdAt'
  };

  export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    userType?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    enabled?: BoolFilter<"User"> | boolean
    extra?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userType?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    enabled?: SortOrder
    extra?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userType?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    enabled?: BoolFilter<"User"> | boolean
    extra?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userType?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    enabled?: SortOrder
    extra?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    userType?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    enabled?: BoolWithAggregatesFilter<"User"> | boolean
    extra?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: BigIntFilter<"Property"> | bigint | number
    category?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    zona?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    number?: StringFilter<"Property"> | string
    floor?: StringFilter<"Property"> | string
    apartment?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    bedrooms?: StringFilter<"Property"> | string
    bathrooms?: StringFilter<"Property"> | string
    maxGuests?: StringFilter<"Property"> | string
    propertyType?: StringFilter<"Property"> | string
    ambientes?: StringFilter<"Property"> | string
    checkInFrom?: StringFilter<"Property"> | string
    checkInTo?: StringFilter<"Property"> | string
    checkOutFrom?: StringFilter<"Property"> | string
    checkOutTo?: StringFilter<"Property"> | string
    beds?: JsonFilter<"Property">
    amenities?: JsonFilter<"Property">
    mtsDelMar?: StringFilter<"Property"> | string
    mascotasCantidad?: StringFilter<"Property"> | string
    chargesCurrency?: StringFilter<"Property"> | string
    charges?: JsonFilter<"Property">
    wifiNetwork?: StringFilter<"Property"> | string
    wifiPassword?: StringFilter<"Property"> | string
    keysCount?: StringFilter<"Property"> | string
    electronicKey?: BoolFilter<"Property"> | boolean
    keyCode?: StringFilter<"Property"> | string
    bookingId?: StringFilter<"Property"> | string
    airbnbId?: StringFilter<"Property"> | string
    bank?: JsonFilter<"Property">
    photos?: JsonFilter<"Property">
    enabled?: BoolFilter<"Property"> | boolean
    eliminado?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    extra?: JsonNullableFilter<"Property">
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    address?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    propertyType?: SortOrder
    ambientes?: SortOrder
    checkInFrom?: SortOrder
    checkInTo?: SortOrder
    checkOutFrom?: SortOrder
    checkOutTo?: SortOrder
    beds?: SortOrder
    amenities?: SortOrder
    mtsDelMar?: SortOrder
    mascotasCantidad?: SortOrder
    chargesCurrency?: SortOrder
    charges?: SortOrder
    wifiNetwork?: SortOrder
    wifiPassword?: SortOrder
    keysCount?: SortOrder
    electronicKey?: SortOrder
    keyCode?: SortOrder
    bookingId?: SortOrder
    airbnbId?: SortOrder
    bank?: SortOrder
    photos?: SortOrder
    enabled?: SortOrder
    eliminado?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    category?: StringFilter<"Property"> | string
    name?: StringFilter<"Property"> | string
    zona?: StringFilter<"Property"> | string
    address?: StringFilter<"Property"> | string
    number?: StringFilter<"Property"> | string
    floor?: StringFilter<"Property"> | string
    apartment?: StringFilter<"Property"> | string
    description?: StringFilter<"Property"> | string
    bedrooms?: StringFilter<"Property"> | string
    bathrooms?: StringFilter<"Property"> | string
    maxGuests?: StringFilter<"Property"> | string
    propertyType?: StringFilter<"Property"> | string
    ambientes?: StringFilter<"Property"> | string
    checkInFrom?: StringFilter<"Property"> | string
    checkInTo?: StringFilter<"Property"> | string
    checkOutFrom?: StringFilter<"Property"> | string
    checkOutTo?: StringFilter<"Property"> | string
    beds?: JsonFilter<"Property">
    amenities?: JsonFilter<"Property">
    mtsDelMar?: StringFilter<"Property"> | string
    mascotasCantidad?: StringFilter<"Property"> | string
    chargesCurrency?: StringFilter<"Property"> | string
    charges?: JsonFilter<"Property">
    wifiNetwork?: StringFilter<"Property"> | string
    wifiPassword?: StringFilter<"Property"> | string
    keysCount?: StringFilter<"Property"> | string
    electronicKey?: BoolFilter<"Property"> | boolean
    keyCode?: StringFilter<"Property"> | string
    bookingId?: StringFilter<"Property"> | string
    airbnbId?: StringFilter<"Property"> | string
    bank?: JsonFilter<"Property">
    photos?: JsonFilter<"Property">
    enabled?: BoolFilter<"Property"> | boolean
    eliminado?: BoolFilter<"Property"> | boolean
    createdAt?: DateTimeFilter<"Property"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Property"> | Date | string | null
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    extra?: JsonNullableFilter<"Property">
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    address?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    propertyType?: SortOrder
    ambientes?: SortOrder
    checkInFrom?: SortOrder
    checkInTo?: SortOrder
    checkOutFrom?: SortOrder
    checkOutTo?: SortOrder
    beds?: SortOrder
    amenities?: SortOrder
    mtsDelMar?: SortOrder
    mascotasCantidad?: SortOrder
    chargesCurrency?: SortOrder
    charges?: SortOrder
    wifiNetwork?: SortOrder
    wifiPassword?: SortOrder
    keysCount?: SortOrder
    electronicKey?: SortOrder
    keyCode?: SortOrder
    bookingId?: SortOrder
    airbnbId?: SortOrder
    bank?: SortOrder
    photos?: SortOrder
    enabled?: SortOrder
    eliminado?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Property"> | bigint | number
    category?: StringWithAggregatesFilter<"Property"> | string
    name?: StringWithAggregatesFilter<"Property"> | string
    zona?: StringWithAggregatesFilter<"Property"> | string
    address?: StringWithAggregatesFilter<"Property"> | string
    number?: StringWithAggregatesFilter<"Property"> | string
    floor?: StringWithAggregatesFilter<"Property"> | string
    apartment?: StringWithAggregatesFilter<"Property"> | string
    description?: StringWithAggregatesFilter<"Property"> | string
    bedrooms?: StringWithAggregatesFilter<"Property"> | string
    bathrooms?: StringWithAggregatesFilter<"Property"> | string
    maxGuests?: StringWithAggregatesFilter<"Property"> | string
    propertyType?: StringWithAggregatesFilter<"Property"> | string
    ambientes?: StringWithAggregatesFilter<"Property"> | string
    checkInFrom?: StringWithAggregatesFilter<"Property"> | string
    checkInTo?: StringWithAggregatesFilter<"Property"> | string
    checkOutFrom?: StringWithAggregatesFilter<"Property"> | string
    checkOutTo?: StringWithAggregatesFilter<"Property"> | string
    beds?: JsonWithAggregatesFilter<"Property">
    amenities?: JsonWithAggregatesFilter<"Property">
    mtsDelMar?: StringWithAggregatesFilter<"Property"> | string
    mascotasCantidad?: StringWithAggregatesFilter<"Property"> | string
    chargesCurrency?: StringWithAggregatesFilter<"Property"> | string
    charges?: JsonWithAggregatesFilter<"Property">
    wifiNetwork?: StringWithAggregatesFilter<"Property"> | string
    wifiPassword?: StringWithAggregatesFilter<"Property"> | string
    keysCount?: StringWithAggregatesFilter<"Property"> | string
    electronicKey?: BoolWithAggregatesFilter<"Property"> | boolean
    keyCode?: StringWithAggregatesFilter<"Property"> | string
    bookingId?: StringWithAggregatesFilter<"Property"> | string
    airbnbId?: StringWithAggregatesFilter<"Property"> | string
    bank?: JsonWithAggregatesFilter<"Property">
    photos?: JsonWithAggregatesFilter<"Property">
    enabled?: BoolWithAggregatesFilter<"Property"> | boolean
    eliminado?: BoolWithAggregatesFilter<"Property"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Property"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"Property">
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: BigIntFilter<"Reservation"> | bigint | number
    status?: StringFilter<"Reservation"> | string
    propertyId?: StringFilter<"Reservation"> | string
    propertyName?: StringFilter<"Reservation"> | string
    checkInDate?: StringFilter<"Reservation"> | string
    checkOutDate?: StringFilter<"Reservation"> | string
    checkInTime?: StringFilter<"Reservation"> | string
    checkOutTime?: StringFilter<"Reservation"> | string
    guests?: IntFilter<"Reservation"> | number
    firstName?: StringFilter<"Reservation"> | string
    lastName?: StringFilter<"Reservation"> | string
    phone?: StringFilter<"Reservation"> | string
    docType?: StringFilter<"Reservation"> | string
    dni?: StringFilter<"Reservation"> | string
    hasAttachment?: BoolFilter<"Reservation"> | boolean
    attachmentName?: StringFilter<"Reservation"> | string
    dniException?: BoolFilter<"Reservation"> | boolean
    senaException?: BoolFilter<"Reservation"> | boolean
    hasPaymentProof?: BoolFilter<"Reservation"> | boolean
    paymentProofName?: StringFilter<"Reservation"> | string
    hasVideo?: BoolFilter<"Reservation"> | boolean
    videoName?: StringFilter<"Reservation"> | string
    videoUrl?: StringFilter<"Reservation"> | string
    observaciones?: StringFilter<"Reservation"> | string
    currency?: StringFilter<"Reservation"> | string
    channel?: StringFilter<"Reservation"> | string
    condition?: StringFilter<"Reservation"> | string
    nights?: IntFilter<"Reservation"> | number
    valorNoches?: FloatFilter<"Reservation"> | number
    mascotasEnabled?: BoolFilter<"Reservation"> | boolean
    mascotasQty?: IntFilter<"Reservation"> | number
    mascotasValue?: FloatFilter<"Reservation"> | number
    cocheraEnabled?: BoolFilter<"Reservation"> | boolean
    cocheraId?: StringFilter<"Reservation"> | string
    cocheraValue?: FloatFilter<"Reservation"> | number
    descuento?: FloatFilter<"Reservation"> | number
    totalNeto?: FloatFilter<"Reservation"> | number
    cargos?: FloatFilter<"Reservation"> | number
    totalBruto?: FloatFilter<"Reservation"> | number
    senaPct?: FloatFilter<"Reservation"> | number
    senaValue?: FloatFilter<"Reservation"> | number
    restante?: FloatFilter<"Reservation"> | number
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    extra?: JsonNullableFilter<"Reservation">
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    propertyName?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    guests?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    docType?: SortOrder
    dni?: SortOrder
    hasAttachment?: SortOrder
    attachmentName?: SortOrder
    dniException?: SortOrder
    senaException?: SortOrder
    hasPaymentProof?: SortOrder
    paymentProofName?: SortOrder
    hasVideo?: SortOrder
    videoName?: SortOrder
    videoUrl?: SortOrder
    observaciones?: SortOrder
    currency?: SortOrder
    channel?: SortOrder
    condition?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasEnabled?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraEnabled?: SortOrder
    cocheraId?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    status?: StringFilter<"Reservation"> | string
    propertyId?: StringFilter<"Reservation"> | string
    propertyName?: StringFilter<"Reservation"> | string
    checkInDate?: StringFilter<"Reservation"> | string
    checkOutDate?: StringFilter<"Reservation"> | string
    checkInTime?: StringFilter<"Reservation"> | string
    checkOutTime?: StringFilter<"Reservation"> | string
    guests?: IntFilter<"Reservation"> | number
    firstName?: StringFilter<"Reservation"> | string
    lastName?: StringFilter<"Reservation"> | string
    phone?: StringFilter<"Reservation"> | string
    docType?: StringFilter<"Reservation"> | string
    dni?: StringFilter<"Reservation"> | string
    hasAttachment?: BoolFilter<"Reservation"> | boolean
    attachmentName?: StringFilter<"Reservation"> | string
    dniException?: BoolFilter<"Reservation"> | boolean
    senaException?: BoolFilter<"Reservation"> | boolean
    hasPaymentProof?: BoolFilter<"Reservation"> | boolean
    paymentProofName?: StringFilter<"Reservation"> | string
    hasVideo?: BoolFilter<"Reservation"> | boolean
    videoName?: StringFilter<"Reservation"> | string
    videoUrl?: StringFilter<"Reservation"> | string
    observaciones?: StringFilter<"Reservation"> | string
    currency?: StringFilter<"Reservation"> | string
    channel?: StringFilter<"Reservation"> | string
    condition?: StringFilter<"Reservation"> | string
    nights?: IntFilter<"Reservation"> | number
    valorNoches?: FloatFilter<"Reservation"> | number
    mascotasEnabled?: BoolFilter<"Reservation"> | boolean
    mascotasQty?: IntFilter<"Reservation"> | number
    mascotasValue?: FloatFilter<"Reservation"> | number
    cocheraEnabled?: BoolFilter<"Reservation"> | boolean
    cocheraId?: StringFilter<"Reservation"> | string
    cocheraValue?: FloatFilter<"Reservation"> | number
    descuento?: FloatFilter<"Reservation"> | number
    totalNeto?: FloatFilter<"Reservation"> | number
    cargos?: FloatFilter<"Reservation"> | number
    totalBruto?: FloatFilter<"Reservation"> | number
    senaPct?: FloatFilter<"Reservation"> | number
    senaValue?: FloatFilter<"Reservation"> | number
    restante?: FloatFilter<"Reservation"> | number
    createdAt?: DateTimeFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeFilter<"Reservation"> | Date | string
    extra?: JsonNullableFilter<"Reservation">
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    propertyName?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    guests?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    docType?: SortOrder
    dni?: SortOrder
    hasAttachment?: SortOrder
    attachmentName?: SortOrder
    dniException?: SortOrder
    senaException?: SortOrder
    hasPaymentProof?: SortOrder
    paymentProofName?: SortOrder
    hasVideo?: SortOrder
    videoName?: SortOrder
    videoUrl?: SortOrder
    observaciones?: SortOrder
    currency?: SortOrder
    channel?: SortOrder
    condition?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasEnabled?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraEnabled?: SortOrder
    cocheraId?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Reservation"> | bigint | number
    status?: StringWithAggregatesFilter<"Reservation"> | string
    propertyId?: StringWithAggregatesFilter<"Reservation"> | string
    propertyName?: StringWithAggregatesFilter<"Reservation"> | string
    checkInDate?: StringWithAggregatesFilter<"Reservation"> | string
    checkOutDate?: StringWithAggregatesFilter<"Reservation"> | string
    checkInTime?: StringWithAggregatesFilter<"Reservation"> | string
    checkOutTime?: StringWithAggregatesFilter<"Reservation"> | string
    guests?: IntWithAggregatesFilter<"Reservation"> | number
    firstName?: StringWithAggregatesFilter<"Reservation"> | string
    lastName?: StringWithAggregatesFilter<"Reservation"> | string
    phone?: StringWithAggregatesFilter<"Reservation"> | string
    docType?: StringWithAggregatesFilter<"Reservation"> | string
    dni?: StringWithAggregatesFilter<"Reservation"> | string
    hasAttachment?: BoolWithAggregatesFilter<"Reservation"> | boolean
    attachmentName?: StringWithAggregatesFilter<"Reservation"> | string
    dniException?: BoolWithAggregatesFilter<"Reservation"> | boolean
    senaException?: BoolWithAggregatesFilter<"Reservation"> | boolean
    hasPaymentProof?: BoolWithAggregatesFilter<"Reservation"> | boolean
    paymentProofName?: StringWithAggregatesFilter<"Reservation"> | string
    hasVideo?: BoolWithAggregatesFilter<"Reservation"> | boolean
    videoName?: StringWithAggregatesFilter<"Reservation"> | string
    videoUrl?: StringWithAggregatesFilter<"Reservation"> | string
    observaciones?: StringWithAggregatesFilter<"Reservation"> | string
    currency?: StringWithAggregatesFilter<"Reservation"> | string
    channel?: StringWithAggregatesFilter<"Reservation"> | string
    condition?: StringWithAggregatesFilter<"Reservation"> | string
    nights?: IntWithAggregatesFilter<"Reservation"> | number
    valorNoches?: FloatWithAggregatesFilter<"Reservation"> | number
    mascotasEnabled?: BoolWithAggregatesFilter<"Reservation"> | boolean
    mascotasQty?: IntWithAggregatesFilter<"Reservation"> | number
    mascotasValue?: FloatWithAggregatesFilter<"Reservation"> | number
    cocheraEnabled?: BoolWithAggregatesFilter<"Reservation"> | boolean
    cocheraId?: StringWithAggregatesFilter<"Reservation"> | string
    cocheraValue?: FloatWithAggregatesFilter<"Reservation"> | number
    descuento?: FloatWithAggregatesFilter<"Reservation"> | number
    totalNeto?: FloatWithAggregatesFilter<"Reservation"> | number
    cargos?: FloatWithAggregatesFilter<"Reservation"> | number
    totalBruto?: FloatWithAggregatesFilter<"Reservation"> | number
    senaPct?: FloatWithAggregatesFilter<"Reservation"> | number
    senaValue?: FloatWithAggregatesFilter<"Reservation"> | number
    restante?: FloatWithAggregatesFilter<"Reservation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"Reservation">
  }

  export type RateEntryWhereInput = {
    AND?: RateEntryWhereInput | RateEntryWhereInput[]
    OR?: RateEntryWhereInput[]
    NOT?: RateEntryWhereInput | RateEntryWhereInput[]
    propertyId?: StringFilter<"RateEntry"> | string
    date?: StringFilter<"RateEntry"> | string
    price?: FloatFilter<"RateEntry"> | number
    available?: BoolFilter<"RateEntry"> | boolean
    status?: StringNullableFilter<"RateEntry"> | string | null
    closedUntil?: StringNullableFilter<"RateEntry"> | string | null
    planIds?: JsonFilter<"RateEntry">
    updatedAt?: DateTimeFilter<"RateEntry"> | Date | string
    extra?: JsonNullableFilter<"RateEntry">
  }

  export type RateEntryOrderByWithRelationInput = {
    propertyId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    available?: SortOrder
    status?: SortOrderInput | SortOrder
    closedUntil?: SortOrderInput | SortOrder
    planIds?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type RateEntryWhereUniqueInput = Prisma.AtLeast<{
    propertyId_date?: RateEntryPropertyIdDateCompoundUniqueInput
    AND?: RateEntryWhereInput | RateEntryWhereInput[]
    OR?: RateEntryWhereInput[]
    NOT?: RateEntryWhereInput | RateEntryWhereInput[]
    propertyId?: StringFilter<"RateEntry"> | string
    date?: StringFilter<"RateEntry"> | string
    price?: FloatFilter<"RateEntry"> | number
    available?: BoolFilter<"RateEntry"> | boolean
    status?: StringNullableFilter<"RateEntry"> | string | null
    closedUntil?: StringNullableFilter<"RateEntry"> | string | null
    planIds?: JsonFilter<"RateEntry">
    updatedAt?: DateTimeFilter<"RateEntry"> | Date | string
    extra?: JsonNullableFilter<"RateEntry">
  }, "propertyId_date">

  export type RateEntryOrderByWithAggregationInput = {
    propertyId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    available?: SortOrder
    status?: SortOrderInput | SortOrder
    closedUntil?: SortOrderInput | SortOrder
    planIds?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: RateEntryCountOrderByAggregateInput
    _avg?: RateEntryAvgOrderByAggregateInput
    _max?: RateEntryMaxOrderByAggregateInput
    _min?: RateEntryMinOrderByAggregateInput
    _sum?: RateEntrySumOrderByAggregateInput
  }

  export type RateEntryScalarWhereWithAggregatesInput = {
    AND?: RateEntryScalarWhereWithAggregatesInput | RateEntryScalarWhereWithAggregatesInput[]
    OR?: RateEntryScalarWhereWithAggregatesInput[]
    NOT?: RateEntryScalarWhereWithAggregatesInput | RateEntryScalarWhereWithAggregatesInput[]
    propertyId?: StringWithAggregatesFilter<"RateEntry"> | string
    date?: StringWithAggregatesFilter<"RateEntry"> | string
    price?: FloatWithAggregatesFilter<"RateEntry"> | number
    available?: BoolWithAggregatesFilter<"RateEntry"> | boolean
    status?: StringNullableWithAggregatesFilter<"RateEntry"> | string | null
    closedUntil?: StringNullableWithAggregatesFilter<"RateEntry"> | string | null
    planIds?: JsonWithAggregatesFilter<"RateEntry">
    updatedAt?: DateTimeWithAggregatesFilter<"RateEntry"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"RateEntry">
  }

  export type RatePlanWhereInput = {
    AND?: RatePlanWhereInput | RatePlanWhereInput[]
    OR?: RatePlanWhereInput[]
    NOT?: RatePlanWhereInput | RatePlanWhereInput[]
    id?: StringFilter<"RatePlan"> | string
    name?: StringFilter<"RatePlan"> | string
    description?: StringFilter<"RatePlan"> | string
    color?: StringNullableFilter<"RatePlan"> | string | null
    hasMinNights?: BoolFilter<"RatePlan"> | boolean
    minNights?: IntFilter<"RatePlan"> | number
    hasPerDayNights?: BoolFilter<"RatePlan"> | boolean
    perDayNights?: JsonFilter<"RatePlan">
    priceVariation?: StringFilter<"RatePlan"> | string
    priceVariationType?: StringFilter<"RatePlan"> | string
    hasStayDiscount?: BoolFilter<"RatePlan"> | boolean
    stayDiscounts?: JsonFilter<"RatePlan">
    proximityDiscounts?: JsonFilter<"RatePlan">
    weekendSurcharge?: StringFilter<"RatePlan"> | string
    createdAt?: DateTimeFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeFilter<"RatePlan"> | Date | string
    extra?: JsonNullableFilter<"RatePlan">
  }

  export type RatePlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrderInput | SortOrder
    hasMinNights?: SortOrder
    minNights?: SortOrder
    hasPerDayNights?: SortOrder
    perDayNights?: SortOrder
    priceVariation?: SortOrder
    priceVariationType?: SortOrder
    hasStayDiscount?: SortOrder
    stayDiscounts?: SortOrder
    proximityDiscounts?: SortOrder
    weekendSurcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type RatePlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RatePlanWhereInput | RatePlanWhereInput[]
    OR?: RatePlanWhereInput[]
    NOT?: RatePlanWhereInput | RatePlanWhereInput[]
    name?: StringFilter<"RatePlan"> | string
    description?: StringFilter<"RatePlan"> | string
    color?: StringNullableFilter<"RatePlan"> | string | null
    hasMinNights?: BoolFilter<"RatePlan"> | boolean
    minNights?: IntFilter<"RatePlan"> | number
    hasPerDayNights?: BoolFilter<"RatePlan"> | boolean
    perDayNights?: JsonFilter<"RatePlan">
    priceVariation?: StringFilter<"RatePlan"> | string
    priceVariationType?: StringFilter<"RatePlan"> | string
    hasStayDiscount?: BoolFilter<"RatePlan"> | boolean
    stayDiscounts?: JsonFilter<"RatePlan">
    proximityDiscounts?: JsonFilter<"RatePlan">
    weekendSurcharge?: StringFilter<"RatePlan"> | string
    createdAt?: DateTimeFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeFilter<"RatePlan"> | Date | string
    extra?: JsonNullableFilter<"RatePlan">
  }, "id">

  export type RatePlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrderInput | SortOrder
    hasMinNights?: SortOrder
    minNights?: SortOrder
    hasPerDayNights?: SortOrder
    perDayNights?: SortOrder
    priceVariation?: SortOrder
    priceVariationType?: SortOrder
    hasStayDiscount?: SortOrder
    stayDiscounts?: SortOrder
    proximityDiscounts?: SortOrder
    weekendSurcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: RatePlanCountOrderByAggregateInput
    _avg?: RatePlanAvgOrderByAggregateInput
    _max?: RatePlanMaxOrderByAggregateInput
    _min?: RatePlanMinOrderByAggregateInput
    _sum?: RatePlanSumOrderByAggregateInput
  }

  export type RatePlanScalarWhereWithAggregatesInput = {
    AND?: RatePlanScalarWhereWithAggregatesInput | RatePlanScalarWhereWithAggregatesInput[]
    OR?: RatePlanScalarWhereWithAggregatesInput[]
    NOT?: RatePlanScalarWhereWithAggregatesInput | RatePlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RatePlan"> | string
    name?: StringWithAggregatesFilter<"RatePlan"> | string
    description?: StringWithAggregatesFilter<"RatePlan"> | string
    color?: StringNullableWithAggregatesFilter<"RatePlan"> | string | null
    hasMinNights?: BoolWithAggregatesFilter<"RatePlan"> | boolean
    minNights?: IntWithAggregatesFilter<"RatePlan"> | number
    hasPerDayNights?: BoolWithAggregatesFilter<"RatePlan"> | boolean
    perDayNights?: JsonWithAggregatesFilter<"RatePlan">
    priceVariation?: StringWithAggregatesFilter<"RatePlan"> | string
    priceVariationType?: StringWithAggregatesFilter<"RatePlan"> | string
    hasStayDiscount?: BoolWithAggregatesFilter<"RatePlan"> | boolean
    stayDiscounts?: JsonWithAggregatesFilter<"RatePlan">
    proximityDiscounts?: JsonWithAggregatesFilter<"RatePlan">
    weekendSurcharge?: StringWithAggregatesFilter<"RatePlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RatePlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RatePlan"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"RatePlan">
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: BigIntFilter<"Expense"> | bigint | number
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    unit?: StringFilter<"Expense"> | string
    receipt?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    extra?: JsonNullableFilter<"Expense">
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    date?: StringFilter<"Expense"> | string
    category?: StringFilter<"Expense"> | string
    unit?: StringFilter<"Expense"> | string
    receipt?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    updatedAt?: DateTimeFilter<"Expense"> | Date | string
    extra?: JsonNullableFilter<"Expense">
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: ExpenseCountOrderByAggregateInput
    _avg?: ExpenseAvgOrderByAggregateInput
    _max?: ExpenseMaxOrderByAggregateInput
    _min?: ExpenseMinOrderByAggregateInput
    _sum?: ExpenseSumOrderByAggregateInput
  }

  export type ExpenseScalarWhereWithAggregatesInput = {
    AND?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    OR?: ExpenseScalarWhereWithAggregatesInput[]
    NOT?: ExpenseScalarWhereWithAggregatesInput | ExpenseScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Expense"> | bigint | number
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    date?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringWithAggregatesFilter<"Expense"> | string
    unit?: StringWithAggregatesFilter<"Expense"> | string
    receipt?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"Expense">
  }

  export type InventoryItemWhereInput = {
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    id?: BigIntFilter<"InventoryItem"> | bigint | number
    name?: StringFilter<"InventoryItem"> | string
    category?: StringFilter<"InventoryItem"> | string
    currentStock?: FloatFilter<"InventoryItem"> | number
    minStock?: FloatFilter<"InventoryItem"> | number
    maxStock?: FloatFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    location?: StringFilter<"InventoryItem"> | string
    cost?: FloatFilter<"InventoryItem"> | number
    supplier?: StringNullableFilter<"InventoryItem"> | string | null
    lastRestocked?: StringNullableFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    extra?: JsonNullableFilter<"InventoryItem">
  }

  export type InventoryItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    cost?: SortOrder
    supplier?: SortOrderInput | SortOrder
    lastRestocked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type InventoryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: InventoryItemWhereInput | InventoryItemWhereInput[]
    OR?: InventoryItemWhereInput[]
    NOT?: InventoryItemWhereInput | InventoryItemWhereInput[]
    name?: StringFilter<"InventoryItem"> | string
    category?: StringFilter<"InventoryItem"> | string
    currentStock?: FloatFilter<"InventoryItem"> | number
    minStock?: FloatFilter<"InventoryItem"> | number
    maxStock?: FloatFilter<"InventoryItem"> | number
    unit?: StringFilter<"InventoryItem"> | string
    location?: StringFilter<"InventoryItem"> | string
    cost?: FloatFilter<"InventoryItem"> | number
    supplier?: StringNullableFilter<"InventoryItem"> | string | null
    lastRestocked?: StringNullableFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeFilter<"InventoryItem"> | Date | string
    extra?: JsonNullableFilter<"InventoryItem">
  }, "id">

  export type InventoryItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    cost?: SortOrder
    supplier?: SortOrderInput | SortOrder
    lastRestocked?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: InventoryItemCountOrderByAggregateInput
    _avg?: InventoryItemAvgOrderByAggregateInput
    _max?: InventoryItemMaxOrderByAggregateInput
    _min?: InventoryItemMinOrderByAggregateInput
    _sum?: InventoryItemSumOrderByAggregateInput
  }

  export type InventoryItemScalarWhereWithAggregatesInput = {
    AND?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    OR?: InventoryItemScalarWhereWithAggregatesInput[]
    NOT?: InventoryItemScalarWhereWithAggregatesInput | InventoryItemScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"InventoryItem"> | bigint | number
    name?: StringWithAggregatesFilter<"InventoryItem"> | string
    category?: StringWithAggregatesFilter<"InventoryItem"> | string
    currentStock?: FloatWithAggregatesFilter<"InventoryItem"> | number
    minStock?: FloatWithAggregatesFilter<"InventoryItem"> | number
    maxStock?: FloatWithAggregatesFilter<"InventoryItem"> | number
    unit?: StringWithAggregatesFilter<"InventoryItem"> | string
    location?: StringWithAggregatesFilter<"InventoryItem"> | string
    cost?: FloatWithAggregatesFilter<"InventoryItem"> | number
    supplier?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    lastRestocked?: StringNullableWithAggregatesFilter<"InventoryItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InventoryItem"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"InventoryItem">
  }

  export type ChargeCategoryWhereInput = {
    AND?: ChargeCategoryWhereInput | ChargeCategoryWhereInput[]
    OR?: ChargeCategoryWhereInput[]
    NOT?: ChargeCategoryWhereInput | ChargeCategoryWhereInput[]
    id?: BigIntFilter<"ChargeCategory"> | bigint | number
    type?: StringFilter<"ChargeCategory"> | string
    name?: StringFilter<"ChargeCategory"> | string
    zona?: StringFilter<"ChargeCategory"> | string
    description?: StringFilter<"ChargeCategory"> | string
    amount?: FloatFilter<"ChargeCategory"> | number
    currency?: StringFilter<"ChargeCategory"> | string
    createdAt?: DateTimeFilter<"ChargeCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ChargeCategory"> | Date | string
    extra?: JsonNullableFilter<"ChargeCategory">
  }

  export type ChargeCategoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
  }

  export type ChargeCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ChargeCategoryWhereInput | ChargeCategoryWhereInput[]
    OR?: ChargeCategoryWhereInput[]
    NOT?: ChargeCategoryWhereInput | ChargeCategoryWhereInput[]
    type?: StringFilter<"ChargeCategory"> | string
    name?: StringFilter<"ChargeCategory"> | string
    zona?: StringFilter<"ChargeCategory"> | string
    description?: StringFilter<"ChargeCategory"> | string
    amount?: FloatFilter<"ChargeCategory"> | number
    currency?: StringFilter<"ChargeCategory"> | string
    createdAt?: DateTimeFilter<"ChargeCategory"> | Date | string
    updatedAt?: DateTimeFilter<"ChargeCategory"> | Date | string
    extra?: JsonNullableFilter<"ChargeCategory">
  }, "id">

  export type ChargeCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrderInput | SortOrder
    _count?: ChargeCategoryCountOrderByAggregateInput
    _avg?: ChargeCategoryAvgOrderByAggregateInput
    _max?: ChargeCategoryMaxOrderByAggregateInput
    _min?: ChargeCategoryMinOrderByAggregateInput
    _sum?: ChargeCategorySumOrderByAggregateInput
  }

  export type ChargeCategoryScalarWhereWithAggregatesInput = {
    AND?: ChargeCategoryScalarWhereWithAggregatesInput | ChargeCategoryScalarWhereWithAggregatesInput[]
    OR?: ChargeCategoryScalarWhereWithAggregatesInput[]
    NOT?: ChargeCategoryScalarWhereWithAggregatesInput | ChargeCategoryScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ChargeCategory"> | bigint | number
    type?: StringWithAggregatesFilter<"ChargeCategory"> | string
    name?: StringWithAggregatesFilter<"ChargeCategory"> | string
    zona?: StringWithAggregatesFilter<"ChargeCategory"> | string
    description?: StringWithAggregatesFilter<"ChargeCategory"> | string
    amount?: FloatWithAggregatesFilter<"ChargeCategory"> | number
    currency?: StringWithAggregatesFilter<"ChargeCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ChargeCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ChargeCategory"> | Date | string
    extra?: JsonNullableWithAggregatesFilter<"ChargeCategory">
  }

  export type AppSettingWhereInput = {
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    key?: StringFilter<"AppSetting"> | string
    value?: JsonFilter<"AppSetting">
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }

  export type AppSettingOrderByWithRelationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingWhereUniqueInput = Prisma.AtLeast<{
    key?: string
    AND?: AppSettingWhereInput | AppSettingWhereInput[]
    OR?: AppSettingWhereInput[]
    NOT?: AppSettingWhereInput | AppSettingWhereInput[]
    value?: JsonFilter<"AppSetting">
    updatedAt?: DateTimeFilter<"AppSetting"> | Date | string
  }, "key">

  export type AppSettingOrderByWithAggregationInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
    _count?: AppSettingCountOrderByAggregateInput
    _max?: AppSettingMaxOrderByAggregateInput
    _min?: AppSettingMinOrderByAggregateInput
  }

  export type AppSettingScalarWhereWithAggregatesInput = {
    AND?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    OR?: AppSettingScalarWhereWithAggregatesInput[]
    NOT?: AppSettingScalarWhereWithAggregatesInput | AppSettingScalarWhereWithAggregatesInput[]
    key?: StringWithAggregatesFilter<"AppSetting"> | string
    value?: JsonWithAggregatesFilter<"AppSetting">
    updatedAt?: DateTimeWithAggregatesFilter<"AppSetting"> | Date | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    id?: StringFilter<"Photo"> | string
    propertyId?: StringNullableFilter<"Photo"> | string | null
    mimeType?: StringFilter<"Photo"> | string
    size?: IntFilter<"Photo"> | number
    width?: IntNullableFilter<"Photo"> | number | null
    height?: IntNullableFilter<"Photo"> | number | null
    data?: BytesFilter<"Photo"> | Bytes
    createdAt?: DateTimeFilter<"Photo"> | Date | string
  }

  export type PhotoOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    propertyId?: StringNullableFilter<"Photo"> | string | null
    mimeType?: StringFilter<"Photo"> | string
    size?: IntFilter<"Photo"> | number
    width?: IntNullableFilter<"Photo"> | number | null
    height?: IntNullableFilter<"Photo"> | number | null
    data?: BytesFilter<"Photo"> | Bytes
    createdAt?: DateTimeFilter<"Photo"> | Date | string
  }, "id">

  export type PhotoOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrderInput | SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _avg?: PhotoAvgOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
    _sum?: PhotoSumOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photo"> | string
    propertyId?: StringNullableWithAggregatesFilter<"Photo"> | string | null
    mimeType?: StringWithAggregatesFilter<"Photo"> | string
    size?: IntWithAggregatesFilter<"Photo"> | number
    width?: IntNullableWithAggregatesFilter<"Photo"> | number | null
    height?: IntNullableWithAggregatesFilter<"Photo"> | number | null
    data?: BytesWithAggregatesFilter<"Photo"> | Bytes
    createdAt?: DateTimeWithAggregatesFilter<"Photo"> | Date | string
  }

  export type VideoWhereInput = {
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    id?: StringFilter<"Video"> | string
    reservationId?: StringNullableFilter<"Video"> | string | null
    fileName?: StringFilter<"Video"> | string
    mimeType?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
  }

  export type VideoOrderByWithRelationInput = {
    id?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VideoWhereInput | VideoWhereInput[]
    OR?: VideoWhereInput[]
    NOT?: VideoWhereInput | VideoWhereInput[]
    reservationId?: StringNullableFilter<"Video"> | string | null
    fileName?: StringFilter<"Video"> | string
    mimeType?: StringFilter<"Video"> | string
    size?: IntFilter<"Video"> | number
    createdAt?: DateTimeFilter<"Video"> | Date | string
  }, "id">

  export type VideoOrderByWithAggregationInput = {
    id?: SortOrder
    reservationId?: SortOrderInput | SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
    _count?: VideoCountOrderByAggregateInput
    _avg?: VideoAvgOrderByAggregateInput
    _max?: VideoMaxOrderByAggregateInput
    _min?: VideoMinOrderByAggregateInput
    _sum?: VideoSumOrderByAggregateInput
  }

  export type VideoScalarWhereWithAggregatesInput = {
    AND?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    OR?: VideoScalarWhereWithAggregatesInput[]
    NOT?: VideoScalarWhereWithAggregatesInput | VideoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Video"> | string
    reservationId?: StringNullableWithAggregatesFilter<"Video"> | string | null
    fileName?: StringWithAggregatesFilter<"Video"> | string
    mimeType?: StringWithAggregatesFilter<"Video"> | string
    size?: IntWithAggregatesFilter<"Video"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Video"> | Date | string
  }

  export type UserCreateInput = {
    id: bigint | number
    userType: string
    username: string
    name: string
    lastName: string
    phone: string
    email: string
    passwordHash: string
    enabled?: boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id: bigint | number
    userType: string
    username: string
    name: string
    lastName: string
    phone: string
    email: string
    passwordHash: string
    enabled?: boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userType?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userType?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id: bigint | number
    userType: string
    username: string
    name: string
    lastName: string
    phone: string
    email: string
    passwordHash: string
    enabled?: boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userType?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    userType?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    enabled?: BoolFieldUpdateOperationsInput | boolean
    extra?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    id: bigint | number
    category: string
    name: string
    zona: string
    address: string
    number: string
    floor: string
    apartment: string
    description: string
    bedrooms: string
    bathrooms: string
    maxGuests: string
    propertyType: string
    ambientes: string
    checkInFrom: string
    checkInTo: string
    checkOutFrom: string
    checkOutTo: string
    beds: JsonNullValueInput | InputJsonValue
    amenities: JsonNullValueInput | InputJsonValue
    mtsDelMar: string
    mascotasCantidad: string
    chargesCurrency: string
    charges: JsonNullValueInput | InputJsonValue
    wifiNetwork: string
    wifiPassword: string
    keysCount: string
    electronicKey: boolean
    keyCode: string
    bookingId: string
    airbnbId: string
    bank: JsonNullValueInput | InputJsonValue
    photos: JsonNullValueInput | InputJsonValue
    enabled?: boolean
    eliminado?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyUncheckedCreateInput = {
    id: bigint | number
    category: string
    name: string
    zona: string
    address: string
    number: string
    floor: string
    apartment: string
    description: string
    bedrooms: string
    bathrooms: string
    maxGuests: string
    propertyType: string
    ambientes: string
    checkInFrom: string
    checkInTo: string
    checkOutFrom: string
    checkOutTo: string
    beds: JsonNullValueInput | InputJsonValue
    amenities: JsonNullValueInput | InputJsonValue
    mtsDelMar: string
    mascotasCantidad: string
    chargesCurrency: string
    charges: JsonNullValueInput | InputJsonValue
    wifiNetwork: string
    wifiPassword: string
    keysCount: string
    electronicKey: boolean
    keyCode: string
    bookingId: string
    airbnbId: string
    bank: JsonNullValueInput | InputJsonValue
    photos: JsonNullValueInput | InputJsonValue
    enabled?: boolean
    eliminado?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bedrooms?: StringFieldUpdateOperationsInput | string
    bathrooms?: StringFieldUpdateOperationsInput | string
    maxGuests?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    ambientes?: StringFieldUpdateOperationsInput | string
    checkInFrom?: StringFieldUpdateOperationsInput | string
    checkInTo?: StringFieldUpdateOperationsInput | string
    checkOutFrom?: StringFieldUpdateOperationsInput | string
    checkOutTo?: StringFieldUpdateOperationsInput | string
    beds?: JsonNullValueInput | InputJsonValue
    amenities?: JsonNullValueInput | InputJsonValue
    mtsDelMar?: StringFieldUpdateOperationsInput | string
    mascotasCantidad?: StringFieldUpdateOperationsInput | string
    chargesCurrency?: StringFieldUpdateOperationsInput | string
    charges?: JsonNullValueInput | InputJsonValue
    wifiNetwork?: StringFieldUpdateOperationsInput | string
    wifiPassword?: StringFieldUpdateOperationsInput | string
    keysCount?: StringFieldUpdateOperationsInput | string
    electronicKey?: BoolFieldUpdateOperationsInput | boolean
    keyCode?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    airbnbId?: StringFieldUpdateOperationsInput | string
    bank?: JsonNullValueInput | InputJsonValue
    photos?: JsonNullValueInput | InputJsonValue
    enabled?: BoolFieldUpdateOperationsInput | boolean
    eliminado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bedrooms?: StringFieldUpdateOperationsInput | string
    bathrooms?: StringFieldUpdateOperationsInput | string
    maxGuests?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    ambientes?: StringFieldUpdateOperationsInput | string
    checkInFrom?: StringFieldUpdateOperationsInput | string
    checkInTo?: StringFieldUpdateOperationsInput | string
    checkOutFrom?: StringFieldUpdateOperationsInput | string
    checkOutTo?: StringFieldUpdateOperationsInput | string
    beds?: JsonNullValueInput | InputJsonValue
    amenities?: JsonNullValueInput | InputJsonValue
    mtsDelMar?: StringFieldUpdateOperationsInput | string
    mascotasCantidad?: StringFieldUpdateOperationsInput | string
    chargesCurrency?: StringFieldUpdateOperationsInput | string
    charges?: JsonNullValueInput | InputJsonValue
    wifiNetwork?: StringFieldUpdateOperationsInput | string
    wifiPassword?: StringFieldUpdateOperationsInput | string
    keysCount?: StringFieldUpdateOperationsInput | string
    electronicKey?: BoolFieldUpdateOperationsInput | boolean
    keyCode?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    airbnbId?: StringFieldUpdateOperationsInput | string
    bank?: JsonNullValueInput | InputJsonValue
    photos?: JsonNullValueInput | InputJsonValue
    enabled?: BoolFieldUpdateOperationsInput | boolean
    eliminado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyCreateManyInput = {
    id: bigint | number
    category: string
    name: string
    zona: string
    address: string
    number: string
    floor: string
    apartment: string
    description: string
    bedrooms: string
    bathrooms: string
    maxGuests: string
    propertyType: string
    ambientes: string
    checkInFrom: string
    checkInTo: string
    checkOutFrom: string
    checkOutTo: string
    beds: JsonNullValueInput | InputJsonValue
    amenities: JsonNullValueInput | InputJsonValue
    mtsDelMar: string
    mascotasCantidad: string
    chargesCurrency: string
    charges: JsonNullValueInput | InputJsonValue
    wifiNetwork: string
    wifiPassword: string
    keysCount: string
    electronicKey: boolean
    keyCode: string
    bookingId: string
    airbnbId: string
    bank: JsonNullValueInput | InputJsonValue
    photos: JsonNullValueInput | InputJsonValue
    enabled?: boolean
    eliminado?: boolean
    createdAt?: Date | string
    deletedAt?: Date | string | null
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bedrooms?: StringFieldUpdateOperationsInput | string
    bathrooms?: StringFieldUpdateOperationsInput | string
    maxGuests?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    ambientes?: StringFieldUpdateOperationsInput | string
    checkInFrom?: StringFieldUpdateOperationsInput | string
    checkInTo?: StringFieldUpdateOperationsInput | string
    checkOutFrom?: StringFieldUpdateOperationsInput | string
    checkOutTo?: StringFieldUpdateOperationsInput | string
    beds?: JsonNullValueInput | InputJsonValue
    amenities?: JsonNullValueInput | InputJsonValue
    mtsDelMar?: StringFieldUpdateOperationsInput | string
    mascotasCantidad?: StringFieldUpdateOperationsInput | string
    chargesCurrency?: StringFieldUpdateOperationsInput | string
    charges?: JsonNullValueInput | InputJsonValue
    wifiNetwork?: StringFieldUpdateOperationsInput | string
    wifiPassword?: StringFieldUpdateOperationsInput | string
    keysCount?: StringFieldUpdateOperationsInput | string
    electronicKey?: BoolFieldUpdateOperationsInput | boolean
    keyCode?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    airbnbId?: StringFieldUpdateOperationsInput | string
    bank?: JsonNullValueInput | InputJsonValue
    photos?: JsonNullValueInput | InputJsonValue
    enabled?: BoolFieldUpdateOperationsInput | boolean
    eliminado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    category?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    floor?: StringFieldUpdateOperationsInput | string
    apartment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    bedrooms?: StringFieldUpdateOperationsInput | string
    bathrooms?: StringFieldUpdateOperationsInput | string
    maxGuests?: StringFieldUpdateOperationsInput | string
    propertyType?: StringFieldUpdateOperationsInput | string
    ambientes?: StringFieldUpdateOperationsInput | string
    checkInFrom?: StringFieldUpdateOperationsInput | string
    checkInTo?: StringFieldUpdateOperationsInput | string
    checkOutFrom?: StringFieldUpdateOperationsInput | string
    checkOutTo?: StringFieldUpdateOperationsInput | string
    beds?: JsonNullValueInput | InputJsonValue
    amenities?: JsonNullValueInput | InputJsonValue
    mtsDelMar?: StringFieldUpdateOperationsInput | string
    mascotasCantidad?: StringFieldUpdateOperationsInput | string
    chargesCurrency?: StringFieldUpdateOperationsInput | string
    charges?: JsonNullValueInput | InputJsonValue
    wifiNetwork?: StringFieldUpdateOperationsInput | string
    wifiPassword?: StringFieldUpdateOperationsInput | string
    keysCount?: StringFieldUpdateOperationsInput | string
    electronicKey?: BoolFieldUpdateOperationsInput | boolean
    keyCode?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    airbnbId?: StringFieldUpdateOperationsInput | string
    bank?: JsonNullValueInput | InputJsonValue
    photos?: JsonNullValueInput | InputJsonValue
    enabled?: BoolFieldUpdateOperationsInput | boolean
    eliminado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationCreateInput = {
    id: bigint | number
    status: string
    propertyId: string
    propertyName: string
    checkInDate: string
    checkOutDate: string
    checkInTime: string
    checkOutTime: string
    guests: number
    firstName: string
    lastName: string
    phone: string
    docType: string
    dni: string
    hasAttachment: boolean
    attachmentName: string
    dniException: boolean
    senaException: boolean
    hasPaymentProof: boolean
    paymentProofName: string
    hasVideo: boolean
    videoName: string
    videoUrl?: string
    observaciones: string
    currency: string
    channel: string
    condition: string
    nights: number
    valorNoches: number
    mascotasEnabled: boolean
    mascotasQty: number
    mascotasValue: number
    cocheraEnabled: boolean
    cocheraId: string
    cocheraValue: number
    descuento: number
    totalNeto: number
    cargos: number
    totalBruto: number
    senaPct: number
    senaValue: number
    restante: number
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationUncheckedCreateInput = {
    id: bigint | number
    status: string
    propertyId: string
    propertyName: string
    checkInDate: string
    checkOutDate: string
    checkInTime: string
    checkOutTime: string
    guests: number
    firstName: string
    lastName: string
    phone: string
    docType: string
    dni: string
    hasAttachment: boolean
    attachmentName: string
    dniException: boolean
    senaException: boolean
    hasPaymentProof: boolean
    paymentProofName: string
    hasVideo: boolean
    videoName: string
    videoUrl?: string
    observaciones: string
    currency: string
    channel: string
    condition: string
    nights: number
    valorNoches: number
    mascotasEnabled: boolean
    mascotasQty: number
    mascotasValue: number
    cocheraEnabled: boolean
    cocheraId: string
    cocheraValue: number
    descuento: number
    totalNeto: number
    cargos: number
    totalBruto: number
    senaPct: number
    senaValue: number
    restante: number
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    checkInDate?: StringFieldUpdateOperationsInput | string
    checkOutDate?: StringFieldUpdateOperationsInput | string
    checkInTime?: StringFieldUpdateOperationsInput | string
    checkOutTime?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    hasAttachment?: BoolFieldUpdateOperationsInput | boolean
    attachmentName?: StringFieldUpdateOperationsInput | string
    dniException?: BoolFieldUpdateOperationsInput | boolean
    senaException?: BoolFieldUpdateOperationsInput | boolean
    hasPaymentProof?: BoolFieldUpdateOperationsInput | boolean
    paymentProofName?: StringFieldUpdateOperationsInput | string
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    videoName?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    nights?: IntFieldUpdateOperationsInput | number
    valorNoches?: FloatFieldUpdateOperationsInput | number
    mascotasEnabled?: BoolFieldUpdateOperationsInput | boolean
    mascotasQty?: IntFieldUpdateOperationsInput | number
    mascotasValue?: FloatFieldUpdateOperationsInput | number
    cocheraEnabled?: BoolFieldUpdateOperationsInput | boolean
    cocheraId?: StringFieldUpdateOperationsInput | string
    cocheraValue?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    totalNeto?: FloatFieldUpdateOperationsInput | number
    cargos?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    senaPct?: FloatFieldUpdateOperationsInput | number
    senaValue?: FloatFieldUpdateOperationsInput | number
    restante?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    checkInDate?: StringFieldUpdateOperationsInput | string
    checkOutDate?: StringFieldUpdateOperationsInput | string
    checkInTime?: StringFieldUpdateOperationsInput | string
    checkOutTime?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    hasAttachment?: BoolFieldUpdateOperationsInput | boolean
    attachmentName?: StringFieldUpdateOperationsInput | string
    dniException?: BoolFieldUpdateOperationsInput | boolean
    senaException?: BoolFieldUpdateOperationsInput | boolean
    hasPaymentProof?: BoolFieldUpdateOperationsInput | boolean
    paymentProofName?: StringFieldUpdateOperationsInput | string
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    videoName?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    nights?: IntFieldUpdateOperationsInput | number
    valorNoches?: FloatFieldUpdateOperationsInput | number
    mascotasEnabled?: BoolFieldUpdateOperationsInput | boolean
    mascotasQty?: IntFieldUpdateOperationsInput | number
    mascotasValue?: FloatFieldUpdateOperationsInput | number
    cocheraEnabled?: BoolFieldUpdateOperationsInput | boolean
    cocheraId?: StringFieldUpdateOperationsInput | string
    cocheraValue?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    totalNeto?: FloatFieldUpdateOperationsInput | number
    cargos?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    senaPct?: FloatFieldUpdateOperationsInput | number
    senaValue?: FloatFieldUpdateOperationsInput | number
    restante?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationCreateManyInput = {
    id: bigint | number
    status: string
    propertyId: string
    propertyName: string
    checkInDate: string
    checkOutDate: string
    checkInTime: string
    checkOutTime: string
    guests: number
    firstName: string
    lastName: string
    phone: string
    docType: string
    dni: string
    hasAttachment: boolean
    attachmentName: string
    dniException: boolean
    senaException: boolean
    hasPaymentProof: boolean
    paymentProofName: string
    hasVideo: boolean
    videoName: string
    videoUrl?: string
    observaciones: string
    currency: string
    channel: string
    condition: string
    nights: number
    valorNoches: number
    mascotasEnabled: boolean
    mascotasQty: number
    mascotasValue: number
    cocheraEnabled: boolean
    cocheraId: string
    cocheraValue: number
    descuento: number
    totalNeto: number
    cargos: number
    totalBruto: number
    senaPct: number
    senaValue: number
    restante: number
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    checkInDate?: StringFieldUpdateOperationsInput | string
    checkOutDate?: StringFieldUpdateOperationsInput | string
    checkInTime?: StringFieldUpdateOperationsInput | string
    checkOutTime?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    hasAttachment?: BoolFieldUpdateOperationsInput | boolean
    attachmentName?: StringFieldUpdateOperationsInput | string
    dniException?: BoolFieldUpdateOperationsInput | boolean
    senaException?: BoolFieldUpdateOperationsInput | boolean
    hasPaymentProof?: BoolFieldUpdateOperationsInput | boolean
    paymentProofName?: StringFieldUpdateOperationsInput | string
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    videoName?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    nights?: IntFieldUpdateOperationsInput | number
    valorNoches?: FloatFieldUpdateOperationsInput | number
    mascotasEnabled?: BoolFieldUpdateOperationsInput | boolean
    mascotasQty?: IntFieldUpdateOperationsInput | number
    mascotasValue?: FloatFieldUpdateOperationsInput | number
    cocheraEnabled?: BoolFieldUpdateOperationsInput | boolean
    cocheraId?: StringFieldUpdateOperationsInput | string
    cocheraValue?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    totalNeto?: FloatFieldUpdateOperationsInput | number
    cargos?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    senaPct?: FloatFieldUpdateOperationsInput | number
    senaValue?: FloatFieldUpdateOperationsInput | number
    restante?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    status?: StringFieldUpdateOperationsInput | string
    propertyId?: StringFieldUpdateOperationsInput | string
    propertyName?: StringFieldUpdateOperationsInput | string
    checkInDate?: StringFieldUpdateOperationsInput | string
    checkOutDate?: StringFieldUpdateOperationsInput | string
    checkInTime?: StringFieldUpdateOperationsInput | string
    checkOutTime?: StringFieldUpdateOperationsInput | string
    guests?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    docType?: StringFieldUpdateOperationsInput | string
    dni?: StringFieldUpdateOperationsInput | string
    hasAttachment?: BoolFieldUpdateOperationsInput | boolean
    attachmentName?: StringFieldUpdateOperationsInput | string
    dniException?: BoolFieldUpdateOperationsInput | boolean
    senaException?: BoolFieldUpdateOperationsInput | boolean
    hasPaymentProof?: BoolFieldUpdateOperationsInput | boolean
    paymentProofName?: StringFieldUpdateOperationsInput | string
    hasVideo?: BoolFieldUpdateOperationsInput | boolean
    videoName?: StringFieldUpdateOperationsInput | string
    videoUrl?: StringFieldUpdateOperationsInput | string
    observaciones?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    channel?: StringFieldUpdateOperationsInput | string
    condition?: StringFieldUpdateOperationsInput | string
    nights?: IntFieldUpdateOperationsInput | number
    valorNoches?: FloatFieldUpdateOperationsInput | number
    mascotasEnabled?: BoolFieldUpdateOperationsInput | boolean
    mascotasQty?: IntFieldUpdateOperationsInput | number
    mascotasValue?: FloatFieldUpdateOperationsInput | number
    cocheraEnabled?: BoolFieldUpdateOperationsInput | boolean
    cocheraId?: StringFieldUpdateOperationsInput | string
    cocheraValue?: FloatFieldUpdateOperationsInput | number
    descuento?: FloatFieldUpdateOperationsInput | number
    totalNeto?: FloatFieldUpdateOperationsInput | number
    cargos?: FloatFieldUpdateOperationsInput | number
    totalBruto?: FloatFieldUpdateOperationsInput | number
    senaPct?: FloatFieldUpdateOperationsInput | number
    senaValue?: FloatFieldUpdateOperationsInput | number
    restante?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryCreateInput = {
    propertyId: string
    date: string
    price: number
    available: boolean
    status?: string | null
    closedUntil?: string | null
    planIds: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryUncheckedCreateInput = {
    propertyId: string
    date: string
    price: number
    available: boolean
    status?: string | null
    closedUntil?: string | null
    planIds: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryUpdateInput = {
    propertyId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    closedUntil?: NullableStringFieldUpdateOperationsInput | string | null
    planIds?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryUncheckedUpdateInput = {
    propertyId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    closedUntil?: NullableStringFieldUpdateOperationsInput | string | null
    planIds?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryCreateManyInput = {
    propertyId: string
    date: string
    price: number
    available: boolean
    status?: string | null
    closedUntil?: string | null
    planIds: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryUpdateManyMutationInput = {
    propertyId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    closedUntil?: NullableStringFieldUpdateOperationsInput | string | null
    planIds?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RateEntryUncheckedUpdateManyInput = {
    propertyId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    available?: BoolFieldUpdateOperationsInput | boolean
    status?: NullableStringFieldUpdateOperationsInput | string | null
    closedUntil?: NullableStringFieldUpdateOperationsInput | string | null
    planIds?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanCreateInput = {
    id: string
    name: string
    description: string
    color?: string | null
    hasMinNights: boolean
    minNights: number
    hasPerDayNights: boolean
    perDayNights: JsonNullValueInput | InputJsonValue
    priceVariation: string
    priceVariationType: string
    hasStayDiscount: boolean
    stayDiscounts: JsonNullValueInput | InputJsonValue
    proximityDiscounts: JsonNullValueInput | InputJsonValue
    weekendSurcharge: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanUncheckedCreateInput = {
    id: string
    name: string
    description: string
    color?: string | null
    hasMinNights: boolean
    minNights: number
    hasPerDayNights: boolean
    perDayNights: JsonNullValueInput | InputJsonValue
    priceVariation: string
    priceVariationType: string
    hasStayDiscount: boolean
    stayDiscounts: JsonNullValueInput | InputJsonValue
    proximityDiscounts: JsonNullValueInput | InputJsonValue
    weekendSurcharge: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    hasMinNights?: BoolFieldUpdateOperationsInput | boolean
    minNights?: IntFieldUpdateOperationsInput | number
    hasPerDayNights?: BoolFieldUpdateOperationsInput | boolean
    perDayNights?: JsonNullValueInput | InputJsonValue
    priceVariation?: StringFieldUpdateOperationsInput | string
    priceVariationType?: StringFieldUpdateOperationsInput | string
    hasStayDiscount?: BoolFieldUpdateOperationsInput | boolean
    stayDiscounts?: JsonNullValueInput | InputJsonValue
    proximityDiscounts?: JsonNullValueInput | InputJsonValue
    weekendSurcharge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    hasMinNights?: BoolFieldUpdateOperationsInput | boolean
    minNights?: IntFieldUpdateOperationsInput | number
    hasPerDayNights?: BoolFieldUpdateOperationsInput | boolean
    perDayNights?: JsonNullValueInput | InputJsonValue
    priceVariation?: StringFieldUpdateOperationsInput | string
    priceVariationType?: StringFieldUpdateOperationsInput | string
    hasStayDiscount?: BoolFieldUpdateOperationsInput | boolean
    stayDiscounts?: JsonNullValueInput | InputJsonValue
    proximityDiscounts?: JsonNullValueInput | InputJsonValue
    weekendSurcharge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanCreateManyInput = {
    id: string
    name: string
    description: string
    color?: string | null
    hasMinNights: boolean
    minNights: number
    hasPerDayNights: boolean
    perDayNights: JsonNullValueInput | InputJsonValue
    priceVariation: string
    priceVariationType: string
    hasStayDiscount: boolean
    stayDiscounts: JsonNullValueInput | InputJsonValue
    proximityDiscounts: JsonNullValueInput | InputJsonValue
    weekendSurcharge: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    hasMinNights?: BoolFieldUpdateOperationsInput | boolean
    minNights?: IntFieldUpdateOperationsInput | number
    hasPerDayNights?: BoolFieldUpdateOperationsInput | boolean
    perDayNights?: JsonNullValueInput | InputJsonValue
    priceVariation?: StringFieldUpdateOperationsInput | string
    priceVariationType?: StringFieldUpdateOperationsInput | string
    hasStayDiscount?: BoolFieldUpdateOperationsInput | boolean
    stayDiscounts?: JsonNullValueInput | InputJsonValue
    proximityDiscounts?: JsonNullValueInput | InputJsonValue
    weekendSurcharge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RatePlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    hasMinNights?: BoolFieldUpdateOperationsInput | boolean
    minNights?: IntFieldUpdateOperationsInput | number
    hasPerDayNights?: BoolFieldUpdateOperationsInput | boolean
    perDayNights?: JsonNullValueInput | InputJsonValue
    priceVariation?: StringFieldUpdateOperationsInput | string
    priceVariationType?: StringFieldUpdateOperationsInput | string
    hasStayDiscount?: BoolFieldUpdateOperationsInput | boolean
    stayDiscounts?: JsonNullValueInput | InputJsonValue
    proximityDiscounts?: JsonNullValueInput | InputJsonValue
    weekendSurcharge?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseCreateInput = {
    id: bigint | number
    description: string
    amount: number
    date: string
    category: string
    unit: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseUncheckedCreateInput = {
    id: bigint | number
    description: string
    amount: number
    date: string
    category: string
    unit: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseCreateManyInput = {
    id: bigint | number
    description: string
    amount: number
    date: string
    category: string
    unit: string
    receipt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemCreateInput = {
    id: bigint | number
    name: string
    category: string
    currentStock: number
    minStock: number
    maxStock: number
    unit: string
    location: string
    cost: number
    supplier?: string | null
    lastRestocked?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedCreateInput = {
    id: bigint | number
    name: string
    category: string
    currentStock: number
    minStock: number
    maxStock: number
    unit: string
    location: string
    cost: number
    supplier?: string | null
    lastRestocked?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    currentStock?: FloatFieldUpdateOperationsInput | number
    minStock?: FloatFieldUpdateOperationsInput | number
    maxStock?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestocked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    currentStock?: FloatFieldUpdateOperationsInput | number
    minStock?: FloatFieldUpdateOperationsInput | number
    maxStock?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestocked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemCreateManyInput = {
    id: bigint | number
    name: string
    category: string
    currentStock: number
    minStock: number
    maxStock: number
    unit: string
    location: string
    cost: number
    supplier?: string | null
    lastRestocked?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    currentStock?: FloatFieldUpdateOperationsInput | number
    minStock?: FloatFieldUpdateOperationsInput | number
    maxStock?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestocked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type InventoryItemUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    currentStock?: FloatFieldUpdateOperationsInput | number
    minStock?: FloatFieldUpdateOperationsInput | number
    maxStock?: FloatFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastRestocked?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryCreateInput = {
    id: bigint | number
    type: string
    name: string
    zona?: string
    description?: string
    amount: number
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryUncheckedCreateInput = {
    id: bigint | number
    type: string
    name: string
    zona?: string
    description?: string
    amount: number
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryCreateManyInput = {
    id: bigint | number
    type: string
    name: string
    zona?: string
    description?: string
    amount: number
    currency: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ChargeCategoryUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    zona?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extra?: NullableJsonNullValueInput | InputJsonValue
  }

  export type AppSettingCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUncheckedCreateInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingCreateManyInput = {
    key: string
    value: JsonNullValueInput | InputJsonValue
    updatedAt?: Date | string
  }

  export type AppSettingUpdateManyMutationInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppSettingUncheckedUpdateManyInput = {
    key?: StringFieldUpdateOperationsInput | string
    value?: JsonNullValueInput | InputJsonValue
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateInput = {
    id: string
    propertyId?: string | null
    mimeType: string
    size: number
    width?: number | null
    height?: number | null
    data: Bytes
    createdAt?: Date | string
  }

  export type PhotoUncheckedCreateInput = {
    id: string
    propertyId?: string | null
    mimeType: string
    size: number
    width?: number | null
    height?: number | null
    data: Bytes
    createdAt?: Date | string
  }

  export type PhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoCreateManyInput = {
    id: string
    propertyId?: string | null
    mimeType: string
    size: number
    width?: number | null
    height?: number | null
    data: Bytes
    createdAt?: Date | string
  }

  export type PhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propertyId?: NullableStringFieldUpdateOperationsInput | string | null
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    data?: BytesFieldUpdateOperationsInput | Bytes
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateInput = {
    id: string
    reservationId?: string | null
    fileName: string
    mimeType: string
    size: number
    createdAt?: Date | string
  }

  export type VideoUncheckedCreateInput = {
    id: string
    reservationId?: string | null
    fileName: string
    mimeType: string
    size: number
    createdAt?: Date | string
  }

  export type VideoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCreateManyInput = {
    id: string
    reservationId?: string | null
    fileName: string
    mimeType: string
    size: number
    createdAt?: Date | string
  }

  export type VideoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reservationId?: NullableStringFieldUpdateOperationsInput | string | null
    fileName?: StringFieldUpdateOperationsInput | string
    mimeType?: StringFieldUpdateOperationsInput | string
    size?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    enabled?: SortOrder
    extra?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userType?: SortOrder
    username?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    enabled?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    address?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    propertyType?: SortOrder
    ambientes?: SortOrder
    checkInFrom?: SortOrder
    checkInTo?: SortOrder
    checkOutFrom?: SortOrder
    checkOutTo?: SortOrder
    beds?: SortOrder
    amenities?: SortOrder
    mtsDelMar?: SortOrder
    mascotasCantidad?: SortOrder
    chargesCurrency?: SortOrder
    charges?: SortOrder
    wifiNetwork?: SortOrder
    wifiPassword?: SortOrder
    keysCount?: SortOrder
    electronicKey?: SortOrder
    keyCode?: SortOrder
    bookingId?: SortOrder
    airbnbId?: SortOrder
    bank?: SortOrder
    photos?: SortOrder
    enabled?: SortOrder
    eliminado?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    address?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    propertyType?: SortOrder
    ambientes?: SortOrder
    checkInFrom?: SortOrder
    checkInTo?: SortOrder
    checkOutFrom?: SortOrder
    checkOutTo?: SortOrder
    mtsDelMar?: SortOrder
    mascotasCantidad?: SortOrder
    chargesCurrency?: SortOrder
    wifiNetwork?: SortOrder
    wifiPassword?: SortOrder
    keysCount?: SortOrder
    electronicKey?: SortOrder
    keyCode?: SortOrder
    bookingId?: SortOrder
    airbnbId?: SortOrder
    enabled?: SortOrder
    eliminado?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    address?: SortOrder
    number?: SortOrder
    floor?: SortOrder
    apartment?: SortOrder
    description?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    maxGuests?: SortOrder
    propertyType?: SortOrder
    ambientes?: SortOrder
    checkInFrom?: SortOrder
    checkInTo?: SortOrder
    checkOutFrom?: SortOrder
    checkOutTo?: SortOrder
    mtsDelMar?: SortOrder
    mascotasCantidad?: SortOrder
    chargesCurrency?: SortOrder
    wifiNetwork?: SortOrder
    wifiPassword?: SortOrder
    keysCount?: SortOrder
    electronicKey?: SortOrder
    keyCode?: SortOrder
    bookingId?: SortOrder
    airbnbId?: SortOrder
    enabled?: SortOrder
    eliminado?: SortOrder
    createdAt?: SortOrder
    deletedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    propertyName?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    guests?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    docType?: SortOrder
    dni?: SortOrder
    hasAttachment?: SortOrder
    attachmentName?: SortOrder
    dniException?: SortOrder
    senaException?: SortOrder
    hasPaymentProof?: SortOrder
    paymentProofName?: SortOrder
    hasVideo?: SortOrder
    videoName?: SortOrder
    videoUrl?: SortOrder
    observaciones?: SortOrder
    currency?: SortOrder
    channel?: SortOrder
    condition?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasEnabled?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraEnabled?: SortOrder
    cocheraId?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    guests?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    propertyName?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    guests?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    docType?: SortOrder
    dni?: SortOrder
    hasAttachment?: SortOrder
    attachmentName?: SortOrder
    dniException?: SortOrder
    senaException?: SortOrder
    hasPaymentProof?: SortOrder
    paymentProofName?: SortOrder
    hasVideo?: SortOrder
    videoName?: SortOrder
    videoUrl?: SortOrder
    observaciones?: SortOrder
    currency?: SortOrder
    channel?: SortOrder
    condition?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasEnabled?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraEnabled?: SortOrder
    cocheraId?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    propertyId?: SortOrder
    propertyName?: SortOrder
    checkInDate?: SortOrder
    checkOutDate?: SortOrder
    checkInTime?: SortOrder
    checkOutTime?: SortOrder
    guests?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    docType?: SortOrder
    dni?: SortOrder
    hasAttachment?: SortOrder
    attachmentName?: SortOrder
    dniException?: SortOrder
    senaException?: SortOrder
    hasPaymentProof?: SortOrder
    paymentProofName?: SortOrder
    hasVideo?: SortOrder
    videoName?: SortOrder
    videoUrl?: SortOrder
    observaciones?: SortOrder
    currency?: SortOrder
    channel?: SortOrder
    condition?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasEnabled?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraEnabled?: SortOrder
    cocheraId?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    guests?: SortOrder
    nights?: SortOrder
    valorNoches?: SortOrder
    mascotasQty?: SortOrder
    mascotasValue?: SortOrder
    cocheraValue?: SortOrder
    descuento?: SortOrder
    totalNeto?: SortOrder
    cargos?: SortOrder
    totalBruto?: SortOrder
    senaPct?: SortOrder
    senaValue?: SortOrder
    restante?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RateEntryPropertyIdDateCompoundUniqueInput = {
    propertyId: string
    date: string
  }

  export type RateEntryCountOrderByAggregateInput = {
    propertyId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    available?: SortOrder
    status?: SortOrder
    closedUntil?: SortOrder
    planIds?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type RateEntryAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type RateEntryMaxOrderByAggregateInput = {
    propertyId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    available?: SortOrder
    status?: SortOrder
    closedUntil?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateEntryMinOrderByAggregateInput = {
    propertyId?: SortOrder
    date?: SortOrder
    price?: SortOrder
    available?: SortOrder
    status?: SortOrder
    closedUntil?: SortOrder
    updatedAt?: SortOrder
  }

  export type RateEntrySumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RatePlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    hasMinNights?: SortOrder
    minNights?: SortOrder
    hasPerDayNights?: SortOrder
    perDayNights?: SortOrder
    priceVariation?: SortOrder
    priceVariationType?: SortOrder
    hasStayDiscount?: SortOrder
    stayDiscounts?: SortOrder
    proximityDiscounts?: SortOrder
    weekendSurcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type RatePlanAvgOrderByAggregateInput = {
    minNights?: SortOrder
  }

  export type RatePlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    hasMinNights?: SortOrder
    minNights?: SortOrder
    hasPerDayNights?: SortOrder
    priceVariation?: SortOrder
    priceVariationType?: SortOrder
    hasStayDiscount?: SortOrder
    weekendSurcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatePlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    color?: SortOrder
    hasMinNights?: SortOrder
    minNights?: SortOrder
    hasPerDayNights?: SortOrder
    priceVariation?: SortOrder
    priceVariationType?: SortOrder
    hasStayDiscount?: SortOrder
    weekendSurcharge?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RatePlanSumOrderByAggregateInput = {
    minNights?: SortOrder
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type InventoryItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastRestocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type InventoryItemAvgOrderByAggregateInput = {
    id?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    cost?: SortOrder
  }

  export type InventoryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastRestocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    unit?: SortOrder
    location?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastRestocked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryItemSumOrderByAggregateInput = {
    id?: SortOrder
    currentStock?: SortOrder
    minStock?: SortOrder
    maxStock?: SortOrder
    cost?: SortOrder
  }

  export type ChargeCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extra?: SortOrder
  }

  export type ChargeCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type ChargeCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargeCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    zona?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChargeCategorySumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type AppSettingCountOrderByAggregateInput = {
    key?: SortOrder
    value?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMaxOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppSettingMinOrderByAggregateInput = {
    key?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type PhotoCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoAvgOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoSumOrderByAggregateInput = {
    size?: SortOrder
    width?: SortOrder
    height?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type VideoCountOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type VideoMaxOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoMinOrderByAggregateInput = {
    id?: SortOrder
    reservationId?: SortOrder
    fileName?: SortOrder
    mimeType?: SortOrder
    size?: SortOrder
    createdAt?: SortOrder
  }

  export type VideoSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Bytes
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesFilter<$PrismaModel> | Bytes
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Bytes | BytesFieldRefInput<$PrismaModel>
    in?: Bytes[]
    notIn?: Bytes[]
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Bytes
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}