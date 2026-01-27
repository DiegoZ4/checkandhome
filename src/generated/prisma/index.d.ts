
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
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model Unit
 * 
 */
export type Unit = $Result.DefaultSelection<Prisma.$UnitPayload>
/**
 * Model UnitAmenity
 * 
 */
export type UnitAmenity = $Result.DefaultSelection<Prisma.$UnitAmenityPayload>
/**
 * Model UnitPhoto
 * 
 */
export type UnitPhoto = $Result.DefaultSelection<Prisma.$UnitPhotoPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Cleaning
 * 
 */
export type Cleaning = $Result.DefaultSelection<Prisma.$CleaningPayload>
/**
 * Model CheckInOut
 * 
 */
export type CheckInOut = $Result.DefaultSelection<Prisma.$CheckInOutPayload>
/**
 * Model Expense
 * 
 */
export type Expense = $Result.DefaultSelection<Prisma.$ExpensePayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Consumption
 * 
 */
export type Consumption = $Result.DefaultSelection<Prisma.$ConsumptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  GUEST: 'GUEST',
  OWNER: 'OWNER',
  CLEANER: 'CLEANER',
  CHECKINOUT: 'CHECKINOUT'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  CHECKEDIN: 'CHECKEDIN',
  CHECKEDOUT: 'CHECKEDOUT'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const BookingSource: {
  DIRECT: 'DIRECT',
  AIRBNB: 'AIRBNB',
  BOOKING_COM: 'BOOKING_COM',
  OTHER: 'OTHER'
};

export type BookingSource = (typeof BookingSource)[keyof typeof BookingSource]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type BookingSource = $Enums.BookingSource

export const BookingSource: typeof $Enums.BookingSource

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
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unit`: Exposes CRUD operations for the **Unit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Units
    * const units = await prisma.unit.findMany()
    * ```
    */
  get unit(): Prisma.UnitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitAmenity`: Exposes CRUD operations for the **UnitAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitAmenities
    * const unitAmenities = await prisma.unitAmenity.findMany()
    * ```
    */
  get unitAmenity(): Prisma.UnitAmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unitPhoto`: Exposes CRUD operations for the **UnitPhoto** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnitPhotos
    * const unitPhotos = await prisma.unitPhoto.findMany()
    * ```
    */
  get unitPhoto(): Prisma.UnitPhotoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cleaning`: Exposes CRUD operations for the **Cleaning** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cleanings
    * const cleanings = await prisma.cleaning.findMany()
    * ```
    */
  get cleaning(): Prisma.CleaningDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.checkInOut`: Exposes CRUD operations for the **CheckInOut** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CheckInOuts
    * const checkInOuts = await prisma.checkInOut.findMany()
    * ```
    */
  get checkInOut(): Prisma.CheckInOutDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consumption`: Exposes CRUD operations for the **Consumption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Consumptions
    * const consumptions = await prisma.consumption.findMany()
    * ```
    */
  get consumption(): Prisma.ConsumptionDelegate<ExtArgs, ClientOptions>;
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
    Amenity: 'Amenity',
    Unit: 'Unit',
    UnitAmenity: 'UnitAmenity',
    UnitPhoto: 'UnitPhoto',
    Availability: 'Availability',
    Booking: 'Booking',
    Cleaning: 'Cleaning',
    CheckInOut: 'CheckInOut',
    Expense: 'Expense',
    Inventory: 'Inventory',
    Consumption: 'Consumption'
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
      modelProps: "user" | "amenity" | "unit" | "unitAmenity" | "unitPhoto" | "availability" | "booking" | "cleaning" | "checkInOut" | "expense" | "inventory" | "consumption"
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
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      Unit: {
        payload: Prisma.$UnitPayload<ExtArgs>
        fields: Prisma.UnitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findFirst: {
            args: Prisma.UnitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          findMany: {
            args: Prisma.UnitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          create: {
            args: Prisma.UnitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          createMany: {
            args: Prisma.UnitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          delete: {
            args: Prisma.UnitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          update: {
            args: Prisma.UnitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          deleteMany: {
            args: Prisma.UnitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>[]
          }
          upsert: {
            args: Prisma.UnitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPayload>
          }
          aggregate: {
            args: Prisma.UnitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnit>
          }
          groupBy: {
            args: Prisma.UnitGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitCountArgs<ExtArgs>
            result: $Utils.Optional<UnitCountAggregateOutputType> | number
          }
        }
      }
      UnitAmenity: {
        payload: Prisma.$UnitAmenityPayload<ExtArgs>
        fields: Prisma.UnitAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          findFirst: {
            args: Prisma.UnitAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          findMany: {
            args: Prisma.UnitAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>[]
          }
          create: {
            args: Prisma.UnitAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          createMany: {
            args: Prisma.UnitAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitAmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>[]
          }
          delete: {
            args: Prisma.UnitAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          update: {
            args: Prisma.UnitAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          deleteMany: {
            args: Prisma.UnitAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitAmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>[]
          }
          upsert: {
            args: Prisma.UnitAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitAmenityPayload>
          }
          aggregate: {
            args: Prisma.UnitAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitAmenity>
          }
          groupBy: {
            args: Prisma.UnitAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<UnitAmenityCountAggregateOutputType> | number
          }
        }
      }
      UnitPhoto: {
        payload: Prisma.$UnitPhotoPayload<ExtArgs>
        fields: Prisma.UnitPhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnitPhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnitPhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          findFirst: {
            args: Prisma.UnitPhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnitPhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          findMany: {
            args: Prisma.UnitPhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>[]
          }
          create: {
            args: Prisma.UnitPhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          createMany: {
            args: Prisma.UnitPhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UnitPhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>[]
          }
          delete: {
            args: Prisma.UnitPhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          update: {
            args: Prisma.UnitPhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          deleteMany: {
            args: Prisma.UnitPhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnitPhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UnitPhotoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>[]
          }
          upsert: {
            args: Prisma.UnitPhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnitPhotoPayload>
          }
          aggregate: {
            args: Prisma.UnitPhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnitPhoto>
          }
          groupBy: {
            args: Prisma.UnitPhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnitPhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnitPhotoCountArgs<ExtArgs>
            result: $Utils.Optional<UnitPhotoCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          createMany: {
            args: Prisma.AvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Cleaning: {
        payload: Prisma.$CleaningPayload<ExtArgs>
        fields: Prisma.CleaningFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CleaningFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CleaningFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          findFirst: {
            args: Prisma.CleaningFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CleaningFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          findMany: {
            args: Prisma.CleaningFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>[]
          }
          create: {
            args: Prisma.CleaningCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          createMany: {
            args: Prisma.CleaningCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CleaningCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>[]
          }
          delete: {
            args: Prisma.CleaningDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          update: {
            args: Prisma.CleaningUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          deleteMany: {
            args: Prisma.CleaningDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CleaningUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CleaningUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>[]
          }
          upsert: {
            args: Prisma.CleaningUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CleaningPayload>
          }
          aggregate: {
            args: Prisma.CleaningAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCleaning>
          }
          groupBy: {
            args: Prisma.CleaningGroupByArgs<ExtArgs>
            result: $Utils.Optional<CleaningGroupByOutputType>[]
          }
          count: {
            args: Prisma.CleaningCountArgs<ExtArgs>
            result: $Utils.Optional<CleaningCountAggregateOutputType> | number
          }
        }
      }
      CheckInOut: {
        payload: Prisma.$CheckInOutPayload<ExtArgs>
        fields: Prisma.CheckInOutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CheckInOutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CheckInOutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          findFirst: {
            args: Prisma.CheckInOutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CheckInOutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          findMany: {
            args: Prisma.CheckInOutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>[]
          }
          create: {
            args: Prisma.CheckInOutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          createMany: {
            args: Prisma.CheckInOutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CheckInOutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>[]
          }
          delete: {
            args: Prisma.CheckInOutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          update: {
            args: Prisma.CheckInOutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          deleteMany: {
            args: Prisma.CheckInOutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CheckInOutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CheckInOutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>[]
          }
          upsert: {
            args: Prisma.CheckInOutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CheckInOutPayload>
          }
          aggregate: {
            args: Prisma.CheckInOutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCheckInOut>
          }
          groupBy: {
            args: Prisma.CheckInOutGroupByArgs<ExtArgs>
            result: $Utils.Optional<CheckInOutGroupByOutputType>[]
          }
          count: {
            args: Prisma.CheckInOutCountArgs<ExtArgs>
            result: $Utils.Optional<CheckInOutCountAggregateOutputType> | number
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
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Consumption: {
        payload: Prisma.$ConsumptionPayload<ExtArgs>
        fields: Prisma.ConsumptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsumptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsumptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          findFirst: {
            args: Prisma.ConsumptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsumptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          findMany: {
            args: Prisma.ConsumptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>[]
          }
          create: {
            args: Prisma.ConsumptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          createMany: {
            args: Prisma.ConsumptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsumptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>[]
          }
          delete: {
            args: Prisma.ConsumptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          update: {
            args: Prisma.ConsumptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          deleteMany: {
            args: Prisma.ConsumptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsumptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsumptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>[]
          }
          upsert: {
            args: Prisma.ConsumptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsumptionPayload>
          }
          aggregate: {
            args: Prisma.ConsumptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsumption>
          }
          groupBy: {
            args: Prisma.ConsumptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsumptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsumptionCountArgs<ExtArgs>
            result: $Utils.Optional<ConsumptionCountAggregateOutputType> | number
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
    amenity?: AmenityOmit
    unit?: UnitOmit
    unitAmenity?: UnitAmenityOmit
    unitPhoto?: UnitPhotoOmit
    availability?: AvailabilityOmit
    booking?: BookingOmit
    cleaning?: CleaningOmit
    checkInOut?: CheckInOutOmit
    expense?: ExpenseOmit
    inventory?: InventoryOmit
    consumption?: ConsumptionOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedUnits: number
    bookings: number
    cleaningTasks: number
    checkInOutTasks: number
    expenses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedUnits?: boolean | UserCountOutputTypeCountOwnedUnitsArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    cleaningTasks?: boolean | UserCountOutputTypeCountCleaningTasksArgs
    checkInOutTasks?: boolean | UserCountOutputTypeCountCheckInOutTasksArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCleaningTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleaningWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCheckInOutTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInOutWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    units: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | AmenityCountOutputTypeCountUnitsArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAmenityWhereInput
  }


  /**
   * Count Type UnitCountOutputType
   */

  export type UnitCountOutputType = {
    amenities: number
    photos: number
    bookings: number
    availability: number
    inventory: number
    cleanings: number
    checkInOuts: number
    expenses: number
  }

  export type UnitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | UnitCountOutputTypeCountAmenitiesArgs
    photos?: boolean | UnitCountOutputTypeCountPhotosArgs
    bookings?: boolean | UnitCountOutputTypeCountBookingsArgs
    availability?: boolean | UnitCountOutputTypeCountAvailabilityArgs
    inventory?: boolean | UnitCountOutputTypeCountInventoryArgs
    cleanings?: boolean | UnitCountOutputTypeCountCleaningsArgs
    checkInOuts?: boolean | UnitCountOutputTypeCountCheckInOutsArgs
    expenses?: boolean | UnitCountOutputTypeCountExpensesArgs
  }

  // Custom InputTypes
  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitCountOutputType
     */
    select?: UnitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAmenityWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountPhotosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitPhotoWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountCleaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleaningWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountCheckInOutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInOutWhereInput
  }

  /**
   * UnitCountOutputType without action
   */
  export type UnitCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExpenseWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    cleanings: number
    checkInOuts: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cleanings?: boolean | BookingCountOutputTypeCountCleaningsArgs
    checkInOuts?: boolean | BookingCountOutputTypeCountCheckInOutsArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountCleaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleaningWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountCheckInOutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInOutWhereInput
  }


  /**
   * Count Type InventoryCountOutputType
   */

  export type InventoryCountOutputType = {
    consumptions: number
  }

  export type InventoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    consumptions?: boolean | InventoryCountOutputTypeCountConsumptionsArgs
  }

  // Custom InputTypes
  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InventoryCountOutputType
     */
    select?: InventoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InventoryCountOutputType without action
   */
  export type InventoryCountOutputTypeCountConsumptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.UserRole | null
    phone: string | null
    avatar: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    phone: number
    avatar: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    phone?: true
    avatar?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    phone?: true
    avatar?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: $Enums.UserRole
    phone: string | null
    avatar: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ownedUnits?: boolean | User$ownedUnitsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    cleaningTasks?: boolean | User$cleaningTasksArgs<ExtArgs>
    checkInOutTasks?: boolean | User$checkInOutTasksArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    phone?: boolean
    avatar?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "phone" | "avatar" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedUnits?: boolean | User$ownedUnitsArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    cleaningTasks?: boolean | User$cleaningTasksArgs<ExtArgs>
    checkInOutTasks?: boolean | User$checkInOutTasksArgs<ExtArgs>
    expenses?: boolean | User$expensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedUnits: Prisma.$UnitPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      cleaningTasks: Prisma.$CleaningPayload<ExtArgs>[]
      checkInOutTasks: Prisma.$CheckInOutPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: $Enums.UserRole
      phone: string | null
      avatar: string | null
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
    ownedUnits<T extends User$ownedUnitsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cleaningTasks<T extends User$cleaningTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$cleaningTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkInOutTasks<T extends User$checkInOutTasksArgs<ExtArgs> = {}>(args?: Subset<T, User$checkInOutTasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends User$expensesArgs<ExtArgs> = {}>(args?: Subset<T, User$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly phone: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
   * User.ownedUnits
   */
  export type User$ownedUnitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    cursor?: UnitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.cleaningTasks
   */
  export type User$cleaningTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    where?: CleaningWhereInput
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    cursor?: CleaningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * User.checkInOutTasks
   */
  export type User$checkInOutTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    where?: CheckInOutWhereInput
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    cursor?: CheckInOutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * User.expenses
   */
  export type User$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    _all: number
  }


  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: string
    name: string
    logo: string | null
    _count: AmenityCountAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    units?: boolean | Amenity$unitsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    units?: boolean | Amenity$unitsArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      units: Prisma.$UnitAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      logo: string | null
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    units<T extends Amenity$unitsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$unitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'String'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly logo: FieldRef<"Amenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.units
   */
  export type Amenity$unitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    where?: UnitAmenityWhereInput
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    cursor?: UnitAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitAmenityScalarFieldEnum | UnitAmenityScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model Unit
   */

  export type AggregateUnit = {
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  export type UnitAvgAggregateOutputType = {
    pricePerDay: number | null
  }

  export type UnitSumAggregateOutputType = {
    pricePerDay: number | null
  }

  export type UnitMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    pricePerDay: number | null
    currency: string | null
    active: boolean | null
    ownerId: string | null
  }

  export type UnitMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    address: string | null
    pricePerDay: number | null
    currency: string | null
    active: boolean | null
    ownerId: string | null
  }

  export type UnitCountAggregateOutputType = {
    id: number
    name: number
    description: number
    address: number
    pricePerDay: number
    currency: number
    active: number
    ownerId: number
    _all: number
  }


  export type UnitAvgAggregateInputType = {
    pricePerDay?: true
  }

  export type UnitSumAggregateInputType = {
    pricePerDay?: true
  }

  export type UnitMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    pricePerDay?: true
    currency?: true
    active?: true
    ownerId?: true
  }

  export type UnitMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    pricePerDay?: true
    currency?: true
    active?: true
    ownerId?: true
  }

  export type UnitCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    address?: true
    pricePerDay?: true
    currency?: true
    active?: true
    ownerId?: true
    _all?: true
  }

  export type UnitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Unit to aggregate.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Units
    **/
    _count?: true | UnitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitMaxAggregateInputType
  }

  export type GetUnitAggregateType<T extends UnitAggregateArgs> = {
        [P in keyof T & keyof AggregateUnit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnit[P]>
      : GetScalarType<T[P], AggregateUnit[P]>
  }




  export type UnitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitWhereInput
    orderBy?: UnitOrderByWithAggregationInput | UnitOrderByWithAggregationInput[]
    by: UnitScalarFieldEnum[] | UnitScalarFieldEnum
    having?: UnitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitCountAggregateInputType | true
    _avg?: UnitAvgAggregateInputType
    _sum?: UnitSumAggregateInputType
    _min?: UnitMinAggregateInputType
    _max?: UnitMaxAggregateInputType
  }

  export type UnitGroupByOutputType = {
    id: string
    name: string
    description: string | null
    address: string
    pricePerDay: number
    currency: string
    active: boolean
    ownerId: string
    _count: UnitCountAggregateOutputType | null
    _avg: UnitAvgAggregateOutputType | null
    _sum: UnitSumAggregateOutputType | null
    _min: UnitMinAggregateOutputType | null
    _max: UnitMaxAggregateOutputType | null
  }

  type GetUnitGroupByPayload<T extends UnitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitGroupByOutputType[P]>
            : GetScalarType<T[P], UnitGroupByOutputType[P]>
        }
      >
    >


  export type UnitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    pricePerDay?: boolean
    currency?: boolean
    active?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    amenities?: boolean | Unit$amenitiesArgs<ExtArgs>
    photos?: boolean | Unit$photosArgs<ExtArgs>
    bookings?: boolean | Unit$bookingsArgs<ExtArgs>
    availability?: boolean | Unit$availabilityArgs<ExtArgs>
    inventory?: boolean | Unit$inventoryArgs<ExtArgs>
    cleanings?: boolean | Unit$cleaningsArgs<ExtArgs>
    checkInOuts?: boolean | Unit$checkInOutsArgs<ExtArgs>
    expenses?: boolean | Unit$expensesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    pricePerDay?: boolean
    currency?: boolean
    active?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    pricePerDay?: boolean
    currency?: boolean
    active?: boolean
    ownerId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unit"]>

  export type UnitSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    pricePerDay?: boolean
    currency?: boolean
    active?: boolean
    ownerId?: boolean
  }

  export type UnitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "address" | "pricePerDay" | "currency" | "active" | "ownerId", ExtArgs["result"]["unit"]>
  export type UnitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    amenities?: boolean | Unit$amenitiesArgs<ExtArgs>
    photos?: boolean | Unit$photosArgs<ExtArgs>
    bookings?: boolean | Unit$bookingsArgs<ExtArgs>
    availability?: boolean | Unit$availabilityArgs<ExtArgs>
    inventory?: boolean | Unit$inventoryArgs<ExtArgs>
    cleanings?: boolean | Unit$cleaningsArgs<ExtArgs>
    checkInOuts?: boolean | Unit$checkInOutsArgs<ExtArgs>
    expenses?: boolean | Unit$expensesArgs<ExtArgs>
    _count?: boolean | UnitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UnitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UnitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UnitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Unit"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      amenities: Prisma.$UnitAmenityPayload<ExtArgs>[]
      photos: Prisma.$UnitPhotoPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      cleanings: Prisma.$CleaningPayload<ExtArgs>[]
      checkInOuts: Prisma.$CheckInOutPayload<ExtArgs>[]
      expenses: Prisma.$ExpensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      address: string
      pricePerDay: number
      currency: string
      active: boolean
      ownerId: string
    }, ExtArgs["result"]["unit"]>
    composites: {}
  }

  type UnitGetPayload<S extends boolean | null | undefined | UnitDefaultArgs> = $Result.GetResult<Prisma.$UnitPayload, S>

  type UnitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitCountAggregateInputType | true
    }

  export interface UnitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Unit'], meta: { name: 'Unit' } }
    /**
     * Find zero or one Unit that matches the filter.
     * @param {UnitFindUniqueArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitFindUniqueArgs>(args: SelectSubset<T, UnitFindUniqueArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Unit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitFindUniqueOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitFindFirstArgs>(args?: SelectSubset<T, UnitFindFirstArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Unit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindFirstOrThrowArgs} args - Arguments to find a Unit
     * @example
     * // Get one Unit
     * const unit = await prisma.unit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Units that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Units
     * const units = await prisma.unit.findMany()
     * 
     * // Get first 10 Units
     * const units = await prisma.unit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitWithIdOnly = await prisma.unit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitFindManyArgs>(args?: SelectSubset<T, UnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Unit.
     * @param {UnitCreateArgs} args - Arguments to create a Unit.
     * @example
     * // Create one Unit
     * const Unit = await prisma.unit.create({
     *   data: {
     *     // ... data to create a Unit
     *   }
     * })
     * 
     */
    create<T extends UnitCreateArgs>(args: SelectSubset<T, UnitCreateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Units.
     * @param {UnitCreateManyArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitCreateManyArgs>(args?: SelectSubset<T, UnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Units and returns the data saved in the database.
     * @param {UnitCreateManyAndReturnArgs} args - Arguments to create many Units.
     * @example
     * // Create many Units
     * const unit = await prisma.unit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Unit.
     * @param {UnitDeleteArgs} args - Arguments to delete one Unit.
     * @example
     * // Delete one Unit
     * const Unit = await prisma.unit.delete({
     *   where: {
     *     // ... filter to delete one Unit
     *   }
     * })
     * 
     */
    delete<T extends UnitDeleteArgs>(args: SelectSubset<T, UnitDeleteArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Unit.
     * @param {UnitUpdateArgs} args - Arguments to update one Unit.
     * @example
     * // Update one Unit
     * const unit = await prisma.unit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitUpdateArgs>(args: SelectSubset<T, UnitUpdateArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Units.
     * @param {UnitDeleteManyArgs} args - Arguments to filter Units to delete.
     * @example
     * // Delete a few Units
     * const { count } = await prisma.unit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitDeleteManyArgs>(args?: SelectSubset<T, UnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitUpdateManyArgs>(args: SelectSubset<T, UnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Units and returns the data updated in the database.
     * @param {UnitUpdateManyAndReturnArgs} args - Arguments to update many Units.
     * @example
     * // Update many Units
     * const unit = await prisma.unit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Units and only return the `id`
     * const unitWithIdOnly = await prisma.unit.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Unit.
     * @param {UnitUpsertArgs} args - Arguments to update or create a Unit.
     * @example
     * // Update or create a Unit
     * const unit = await prisma.unit.upsert({
     *   create: {
     *     // ... data to create a Unit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Unit we want to update
     *   }
     * })
     */
    upsert<T extends UnitUpsertArgs>(args: SelectSubset<T, UnitUpsertArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Units.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitCountArgs} args - Arguments to filter Units to count.
     * @example
     * // Count the number of Units
     * const count = await prisma.unit.count({
     *   where: {
     *     // ... the filter for the Units we want to count
     *   }
     * })
    **/
    count<T extends UnitCountArgs>(
      args?: Subset<T, UnitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAggregateArgs>(args: Subset<T, UnitAggregateArgs>): Prisma.PrismaPromise<GetUnitAggregateType<T>>

    /**
     * Group by Unit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitGroupByArgs} args - Group by arguments.
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
      T extends UnitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitGroupByArgs['orderBy'] }
        : { orderBy?: UnitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Unit model
   */
  readonly fields: UnitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Unit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenities<T extends Unit$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    photos<T extends Unit$photosArgs<ExtArgs> = {}>(args?: Subset<T, Unit$photosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bookings<T extends Unit$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends Unit$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Unit$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventory<T extends Unit$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Unit$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cleanings<T extends Unit$cleaningsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$cleaningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkInOuts<T extends Unit$checkInOutsArgs<ExtArgs> = {}>(args?: Subset<T, Unit$checkInOutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends Unit$expensesArgs<ExtArgs> = {}>(args?: Subset<T, Unit$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExpensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Unit model
   */
  interface UnitFieldRefs {
    readonly id: FieldRef<"Unit", 'String'>
    readonly name: FieldRef<"Unit", 'String'>
    readonly description: FieldRef<"Unit", 'String'>
    readonly address: FieldRef<"Unit", 'String'>
    readonly pricePerDay: FieldRef<"Unit", 'Float'>
    readonly currency: FieldRef<"Unit", 'String'>
    readonly active: FieldRef<"Unit", 'Boolean'>
    readonly ownerId: FieldRef<"Unit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Unit findUnique
   */
  export type UnitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findUniqueOrThrow
   */
  export type UnitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit findFirst
   */
  export type UnitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findFirstOrThrow
   */
  export type UnitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Unit to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Units.
     */
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit findMany
   */
  export type UnitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter, which Units to fetch.
     */
    where?: UnitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Units to fetch.
     */
    orderBy?: UnitOrderByWithRelationInput | UnitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Units.
     */
    cursor?: UnitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Units from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Units.
     */
    skip?: number
    distinct?: UnitScalarFieldEnum | UnitScalarFieldEnum[]
  }

  /**
   * Unit create
   */
  export type UnitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to create a Unit.
     */
    data: XOR<UnitCreateInput, UnitUncheckedCreateInput>
  }

  /**
   * Unit createMany
   */
  export type UnitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
  }

  /**
   * Unit createManyAndReturn
   */
  export type UnitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to create many Units.
     */
    data: UnitCreateManyInput | UnitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit update
   */
  export type UnitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The data needed to update a Unit.
     */
    data: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
    /**
     * Choose, which Unit to update.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit updateMany
   */
  export type UnitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
  }

  /**
   * Unit updateManyAndReturn
   */
  export type UnitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * The data used to update Units.
     */
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyInput>
    /**
     * Filter which Units to update
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Unit upsert
   */
  export type UnitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * The filter to search for the Unit to update in case it exists.
     */
    where: UnitWhereUniqueInput
    /**
     * In case the Unit found by the `where` argument doesn't exist, create a new Unit with this data.
     */
    create: XOR<UnitCreateInput, UnitUncheckedCreateInput>
    /**
     * In case the Unit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitUpdateInput, UnitUncheckedUpdateInput>
  }

  /**
   * Unit delete
   */
  export type UnitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    /**
     * Filter which Unit to delete.
     */
    where: UnitWhereUniqueInput
  }

  /**
   * Unit deleteMany
   */
  export type UnitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Units to delete
     */
    where?: UnitWhereInput
    /**
     * Limit how many Units to delete.
     */
    limit?: number
  }

  /**
   * Unit.amenities
   */
  export type Unit$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    where?: UnitAmenityWhereInput
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    cursor?: UnitAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitAmenityScalarFieldEnum | UnitAmenityScalarFieldEnum[]
  }

  /**
   * Unit.photos
   */
  export type Unit$photosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    where?: UnitPhotoWhereInput
    orderBy?: UnitPhotoOrderByWithRelationInput | UnitPhotoOrderByWithRelationInput[]
    cursor?: UnitPhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UnitPhotoScalarFieldEnum | UnitPhotoScalarFieldEnum[]
  }

  /**
   * Unit.bookings
   */
  export type Unit$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Unit.availability
   */
  export type Unit$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Unit.inventory
   */
  export type Unit$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Unit.cleanings
   */
  export type Unit$cleaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    where?: CleaningWhereInput
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    cursor?: CleaningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * Unit.checkInOuts
   */
  export type Unit$checkInOutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    where?: CheckInOutWhereInput
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    cursor?: CheckInOutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * Unit.expenses
   */
  export type Unit$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Expense
     */
    select?: ExpenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Expense
     */
    omit?: ExpenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
    where?: ExpenseWhereInput
    orderBy?: ExpenseOrderByWithRelationInput | ExpenseOrderByWithRelationInput[]
    cursor?: ExpenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * Unit without action
   */
  export type UnitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
  }


  /**
   * Model UnitAmenity
   */

  export type AggregateUnitAmenity = {
    _count: UnitAmenityCountAggregateOutputType | null
    _min: UnitAmenityMinAggregateOutputType | null
    _max: UnitAmenityMaxAggregateOutputType | null
  }

  export type UnitAmenityMinAggregateOutputType = {
    unitId: string | null
    amenityId: string | null
  }

  export type UnitAmenityMaxAggregateOutputType = {
    unitId: string | null
    amenityId: string | null
  }

  export type UnitAmenityCountAggregateOutputType = {
    unitId: number
    amenityId: number
    _all: number
  }


  export type UnitAmenityMinAggregateInputType = {
    unitId?: true
    amenityId?: true
  }

  export type UnitAmenityMaxAggregateInputType = {
    unitId?: true
    amenityId?: true
  }

  export type UnitAmenityCountAggregateInputType = {
    unitId?: true
    amenityId?: true
    _all?: true
  }

  export type UnitAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitAmenity to aggregate.
     */
    where?: UnitAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAmenities to fetch.
     */
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitAmenities
    **/
    _count?: true | UnitAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitAmenityMaxAggregateInputType
  }

  export type GetUnitAmenityAggregateType<T extends UnitAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitAmenity[P]>
      : GetScalarType<T[P], AggregateUnitAmenity[P]>
  }




  export type UnitAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitAmenityWhereInput
    orderBy?: UnitAmenityOrderByWithAggregationInput | UnitAmenityOrderByWithAggregationInput[]
    by: UnitAmenityScalarFieldEnum[] | UnitAmenityScalarFieldEnum
    having?: UnitAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitAmenityCountAggregateInputType | true
    _min?: UnitAmenityMinAggregateInputType
    _max?: UnitAmenityMaxAggregateInputType
  }

  export type UnitAmenityGroupByOutputType = {
    unitId: string
    amenityId: string
    _count: UnitAmenityCountAggregateOutputType | null
    _min: UnitAmenityMinAggregateOutputType | null
    _max: UnitAmenityMaxAggregateOutputType | null
  }

  type GetUnitAmenityGroupByPayload<T extends UnitAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], UnitAmenityGroupByOutputType[P]>
        }
      >
    >


  export type UnitAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    amenityId?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAmenity"]>

  export type UnitAmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    amenityId?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAmenity"]>

  export type UnitAmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    unitId?: boolean
    amenityId?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitAmenity"]>

  export type UnitAmenitySelectScalar = {
    unitId?: boolean
    amenityId?: boolean
  }

  export type UnitAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"unitId" | "amenityId", ExtArgs["result"]["unitAmenity"]>
  export type UnitAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type UnitAmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type UnitAmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }

  export type $UnitAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitAmenity"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      amenity: Prisma.$AmenityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      unitId: string
      amenityId: string
    }, ExtArgs["result"]["unitAmenity"]>
    composites: {}
  }

  type UnitAmenityGetPayload<S extends boolean | null | undefined | UnitAmenityDefaultArgs> = $Result.GetResult<Prisma.$UnitAmenityPayload, S>

  type UnitAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitAmenityCountAggregateInputType | true
    }

  export interface UnitAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitAmenity'], meta: { name: 'UnitAmenity' } }
    /**
     * Find zero or one UnitAmenity that matches the filter.
     * @param {UnitAmenityFindUniqueArgs} args - Arguments to find a UnitAmenity
     * @example
     * // Get one UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitAmenityFindUniqueArgs>(args: SelectSubset<T, UnitAmenityFindUniqueArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitAmenityFindUniqueOrThrowArgs} args - Arguments to find a UnitAmenity
     * @example
     * // Get one UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityFindFirstArgs} args - Arguments to find a UnitAmenity
     * @example
     * // Get one UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitAmenityFindFirstArgs>(args?: SelectSubset<T, UnitAmenityFindFirstArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityFindFirstOrThrowArgs} args - Arguments to find a UnitAmenity
     * @example
     * // Get one UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitAmenities
     * const unitAmenities = await prisma.unitAmenity.findMany()
     * 
     * // Get first 10 UnitAmenities
     * const unitAmenities = await prisma.unitAmenity.findMany({ take: 10 })
     * 
     * // Only select the `unitId`
     * const unitAmenityWithUnitIdOnly = await prisma.unitAmenity.findMany({ select: { unitId: true } })
     * 
     */
    findMany<T extends UnitAmenityFindManyArgs>(args?: SelectSubset<T, UnitAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitAmenity.
     * @param {UnitAmenityCreateArgs} args - Arguments to create a UnitAmenity.
     * @example
     * // Create one UnitAmenity
     * const UnitAmenity = await prisma.unitAmenity.create({
     *   data: {
     *     // ... data to create a UnitAmenity
     *   }
     * })
     * 
     */
    create<T extends UnitAmenityCreateArgs>(args: SelectSubset<T, UnitAmenityCreateArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitAmenities.
     * @param {UnitAmenityCreateManyArgs} args - Arguments to create many UnitAmenities.
     * @example
     * // Create many UnitAmenities
     * const unitAmenity = await prisma.unitAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitAmenityCreateManyArgs>(args?: SelectSubset<T, UnitAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitAmenities and returns the data saved in the database.
     * @param {UnitAmenityCreateManyAndReturnArgs} args - Arguments to create many UnitAmenities.
     * @example
     * // Create many UnitAmenities
     * const unitAmenity = await prisma.unitAmenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitAmenities and only return the `unitId`
     * const unitAmenityWithUnitIdOnly = await prisma.unitAmenity.createManyAndReturn({
     *   select: { unitId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitAmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitAmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitAmenity.
     * @param {UnitAmenityDeleteArgs} args - Arguments to delete one UnitAmenity.
     * @example
     * // Delete one UnitAmenity
     * const UnitAmenity = await prisma.unitAmenity.delete({
     *   where: {
     *     // ... filter to delete one UnitAmenity
     *   }
     * })
     * 
     */
    delete<T extends UnitAmenityDeleteArgs>(args: SelectSubset<T, UnitAmenityDeleteArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitAmenity.
     * @param {UnitAmenityUpdateArgs} args - Arguments to update one UnitAmenity.
     * @example
     * // Update one UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitAmenityUpdateArgs>(args: SelectSubset<T, UnitAmenityUpdateArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitAmenities.
     * @param {UnitAmenityDeleteManyArgs} args - Arguments to filter UnitAmenities to delete.
     * @example
     * // Delete a few UnitAmenities
     * const { count } = await prisma.unitAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitAmenityDeleteManyArgs>(args?: SelectSubset<T, UnitAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitAmenities
     * const unitAmenity = await prisma.unitAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitAmenityUpdateManyArgs>(args: SelectSubset<T, UnitAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitAmenities and returns the data updated in the database.
     * @param {UnitAmenityUpdateManyAndReturnArgs} args - Arguments to update many UnitAmenities.
     * @example
     * // Update many UnitAmenities
     * const unitAmenity = await prisma.unitAmenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitAmenities and only return the `unitId`
     * const unitAmenityWithUnitIdOnly = await prisma.unitAmenity.updateManyAndReturn({
     *   select: { unitId: true },
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
    updateManyAndReturn<T extends UnitAmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitAmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitAmenity.
     * @param {UnitAmenityUpsertArgs} args - Arguments to update or create a UnitAmenity.
     * @example
     * // Update or create a UnitAmenity
     * const unitAmenity = await prisma.unitAmenity.upsert({
     *   create: {
     *     // ... data to create a UnitAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitAmenity we want to update
     *   }
     * })
     */
    upsert<T extends UnitAmenityUpsertArgs>(args: SelectSubset<T, UnitAmenityUpsertArgs<ExtArgs>>): Prisma__UnitAmenityClient<$Result.GetResult<Prisma.$UnitAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityCountArgs} args - Arguments to filter UnitAmenities to count.
     * @example
     * // Count the number of UnitAmenities
     * const count = await prisma.unitAmenity.count({
     *   where: {
     *     // ... the filter for the UnitAmenities we want to count
     *   }
     * })
    **/
    count<T extends UnitAmenityCountArgs>(
      args?: Subset<T, UnitAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitAmenityAggregateArgs>(args: Subset<T, UnitAmenityAggregateArgs>): Prisma.PrismaPromise<GetUnitAmenityAggregateType<T>>

    /**
     * Group by UnitAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitAmenityGroupByArgs} args - Group by arguments.
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
      T extends UnitAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitAmenityGroupByArgs['orderBy'] }
        : { orderBy?: UnitAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitAmenity model
   */
  readonly fields: UnitAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitAmenity model
   */
  interface UnitAmenityFieldRefs {
    readonly unitId: FieldRef<"UnitAmenity", 'String'>
    readonly amenityId: FieldRef<"UnitAmenity", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UnitAmenity findUnique
   */
  export type UnitAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter, which UnitAmenity to fetch.
     */
    where: UnitAmenityWhereUniqueInput
  }

  /**
   * UnitAmenity findUniqueOrThrow
   */
  export type UnitAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter, which UnitAmenity to fetch.
     */
    where: UnitAmenityWhereUniqueInput
  }

  /**
   * UnitAmenity findFirst
   */
  export type UnitAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter, which UnitAmenity to fetch.
     */
    where?: UnitAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAmenities to fetch.
     */
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitAmenities.
     */
    cursor?: UnitAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitAmenities.
     */
    distinct?: UnitAmenityScalarFieldEnum | UnitAmenityScalarFieldEnum[]
  }

  /**
   * UnitAmenity findFirstOrThrow
   */
  export type UnitAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter, which UnitAmenity to fetch.
     */
    where?: UnitAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAmenities to fetch.
     */
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitAmenities.
     */
    cursor?: UnitAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitAmenities.
     */
    distinct?: UnitAmenityScalarFieldEnum | UnitAmenityScalarFieldEnum[]
  }

  /**
   * UnitAmenity findMany
   */
  export type UnitAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter, which UnitAmenities to fetch.
     */
    where?: UnitAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitAmenities to fetch.
     */
    orderBy?: UnitAmenityOrderByWithRelationInput | UnitAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitAmenities.
     */
    cursor?: UnitAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitAmenities.
     */
    skip?: number
    distinct?: UnitAmenityScalarFieldEnum | UnitAmenityScalarFieldEnum[]
  }

  /**
   * UnitAmenity create
   */
  export type UnitAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitAmenity.
     */
    data: XOR<UnitAmenityCreateInput, UnitAmenityUncheckedCreateInput>
  }

  /**
   * UnitAmenity createMany
   */
  export type UnitAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitAmenities.
     */
    data: UnitAmenityCreateManyInput | UnitAmenityCreateManyInput[]
  }

  /**
   * UnitAmenity createManyAndReturn
   */
  export type UnitAmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * The data used to create many UnitAmenities.
     */
    data: UnitAmenityCreateManyInput | UnitAmenityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitAmenity update
   */
  export type UnitAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitAmenity.
     */
    data: XOR<UnitAmenityUpdateInput, UnitAmenityUncheckedUpdateInput>
    /**
     * Choose, which UnitAmenity to update.
     */
    where: UnitAmenityWhereUniqueInput
  }

  /**
   * UnitAmenity updateMany
   */
  export type UnitAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitAmenities.
     */
    data: XOR<UnitAmenityUpdateManyMutationInput, UnitAmenityUncheckedUpdateManyInput>
    /**
     * Filter which UnitAmenities to update
     */
    where?: UnitAmenityWhereInput
    /**
     * Limit how many UnitAmenities to update.
     */
    limit?: number
  }

  /**
   * UnitAmenity updateManyAndReturn
   */
  export type UnitAmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * The data used to update UnitAmenities.
     */
    data: XOR<UnitAmenityUpdateManyMutationInput, UnitAmenityUncheckedUpdateManyInput>
    /**
     * Filter which UnitAmenities to update
     */
    where?: UnitAmenityWhereInput
    /**
     * Limit how many UnitAmenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitAmenity upsert
   */
  export type UnitAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitAmenity to update in case it exists.
     */
    where: UnitAmenityWhereUniqueInput
    /**
     * In case the UnitAmenity found by the `where` argument doesn't exist, create a new UnitAmenity with this data.
     */
    create: XOR<UnitAmenityCreateInput, UnitAmenityUncheckedCreateInput>
    /**
     * In case the UnitAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitAmenityUpdateInput, UnitAmenityUncheckedUpdateInput>
  }

  /**
   * UnitAmenity delete
   */
  export type UnitAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
    /**
     * Filter which UnitAmenity to delete.
     */
    where: UnitAmenityWhereUniqueInput
  }

  /**
   * UnitAmenity deleteMany
   */
  export type UnitAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitAmenities to delete
     */
    where?: UnitAmenityWhereInput
    /**
     * Limit how many UnitAmenities to delete.
     */
    limit?: number
  }

  /**
   * UnitAmenity without action
   */
  export type UnitAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitAmenity
     */
    select?: UnitAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitAmenity
     */
    omit?: UnitAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitAmenityInclude<ExtArgs> | null
  }


  /**
   * Model UnitPhoto
   */

  export type AggregateUnitPhoto = {
    _count: UnitPhotoCountAggregateOutputType | null
    _avg: UnitPhotoAvgAggregateOutputType | null
    _sum: UnitPhotoSumAggregateOutputType | null
    _min: UnitPhotoMinAggregateOutputType | null
    _max: UnitPhotoMaxAggregateOutputType | null
  }

  export type UnitPhotoAvgAggregateOutputType = {
    order: number | null
  }

  export type UnitPhotoSumAggregateOutputType = {
    order: number | null
  }

  export type UnitPhotoMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    url: string | null
    caption: string | null
    order: number | null
    isPrimary: boolean | null
  }

  export type UnitPhotoMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    url: string | null
    caption: string | null
    order: number | null
    isPrimary: boolean | null
  }

  export type UnitPhotoCountAggregateOutputType = {
    id: number
    unitId: number
    url: number
    caption: number
    order: number
    isPrimary: number
    _all: number
  }


  export type UnitPhotoAvgAggregateInputType = {
    order?: true
  }

  export type UnitPhotoSumAggregateInputType = {
    order?: true
  }

  export type UnitPhotoMinAggregateInputType = {
    id?: true
    unitId?: true
    url?: true
    caption?: true
    order?: true
    isPrimary?: true
  }

  export type UnitPhotoMaxAggregateInputType = {
    id?: true
    unitId?: true
    url?: true
    caption?: true
    order?: true
    isPrimary?: true
  }

  export type UnitPhotoCountAggregateInputType = {
    id?: true
    unitId?: true
    url?: true
    caption?: true
    order?: true
    isPrimary?: true
    _all?: true
  }

  export type UnitPhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitPhoto to aggregate.
     */
    where?: UnitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitPhotos to fetch.
     */
    orderBy?: UnitPhotoOrderByWithRelationInput | UnitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnitPhotos
    **/
    _count?: true | UnitPhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnitPhotoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnitPhotoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnitPhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnitPhotoMaxAggregateInputType
  }

  export type GetUnitPhotoAggregateType<T extends UnitPhotoAggregateArgs> = {
        [P in keyof T & keyof AggregateUnitPhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnitPhoto[P]>
      : GetScalarType<T[P], AggregateUnitPhoto[P]>
  }




  export type UnitPhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnitPhotoWhereInput
    orderBy?: UnitPhotoOrderByWithAggregationInput | UnitPhotoOrderByWithAggregationInput[]
    by: UnitPhotoScalarFieldEnum[] | UnitPhotoScalarFieldEnum
    having?: UnitPhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnitPhotoCountAggregateInputType | true
    _avg?: UnitPhotoAvgAggregateInputType
    _sum?: UnitPhotoSumAggregateInputType
    _min?: UnitPhotoMinAggregateInputType
    _max?: UnitPhotoMaxAggregateInputType
  }

  export type UnitPhotoGroupByOutputType = {
    id: string
    unitId: string
    url: string
    caption: string | null
    order: number
    isPrimary: boolean
    _count: UnitPhotoCountAggregateOutputType | null
    _avg: UnitPhotoAvgAggregateOutputType | null
    _sum: UnitPhotoSumAggregateOutputType | null
    _min: UnitPhotoMinAggregateOutputType | null
    _max: UnitPhotoMaxAggregateOutputType | null
  }

  type GetUnitPhotoGroupByPayload<T extends UnitPhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnitPhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnitPhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnitPhotoGroupByOutputType[P]>
            : GetScalarType<T[P], UnitPhotoGroupByOutputType[P]>
        }
      >
    >


  export type UnitPhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    url?: boolean
    caption?: boolean
    order?: boolean
    isPrimary?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitPhoto"]>

  export type UnitPhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    url?: boolean
    caption?: boolean
    order?: boolean
    isPrimary?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitPhoto"]>

  export type UnitPhotoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    url?: boolean
    caption?: boolean
    order?: boolean
    isPrimary?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unitPhoto"]>

  export type UnitPhotoSelectScalar = {
    id?: boolean
    unitId?: boolean
    url?: boolean
    caption?: boolean
    order?: boolean
    isPrimary?: boolean
  }

  export type UnitPhotoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "url" | "caption" | "order" | "isPrimary", ExtArgs["result"]["unitPhoto"]>
  export type UnitPhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type UnitPhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type UnitPhotoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $UnitPhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnitPhoto"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      url: string
      caption: string | null
      order: number
      isPrimary: boolean
    }, ExtArgs["result"]["unitPhoto"]>
    composites: {}
  }

  type UnitPhotoGetPayload<S extends boolean | null | undefined | UnitPhotoDefaultArgs> = $Result.GetResult<Prisma.$UnitPhotoPayload, S>

  type UnitPhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnitPhotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnitPhotoCountAggregateInputType | true
    }

  export interface UnitPhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnitPhoto'], meta: { name: 'UnitPhoto' } }
    /**
     * Find zero or one UnitPhoto that matches the filter.
     * @param {UnitPhotoFindUniqueArgs} args - Arguments to find a UnitPhoto
     * @example
     * // Get one UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnitPhotoFindUniqueArgs>(args: SelectSubset<T, UnitPhotoFindUniqueArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnitPhoto that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnitPhotoFindUniqueOrThrowArgs} args - Arguments to find a UnitPhoto
     * @example
     * // Get one UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnitPhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, UnitPhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitPhoto that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoFindFirstArgs} args - Arguments to find a UnitPhoto
     * @example
     * // Get one UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnitPhotoFindFirstArgs>(args?: SelectSubset<T, UnitPhotoFindFirstArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnitPhoto that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoFindFirstOrThrowArgs} args - Arguments to find a UnitPhoto
     * @example
     * // Get one UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnitPhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, UnitPhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnitPhotos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnitPhotos
     * const unitPhotos = await prisma.unitPhoto.findMany()
     * 
     * // Get first 10 UnitPhotos
     * const unitPhotos = await prisma.unitPhoto.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unitPhotoWithIdOnly = await prisma.unitPhoto.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnitPhotoFindManyArgs>(args?: SelectSubset<T, UnitPhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnitPhoto.
     * @param {UnitPhotoCreateArgs} args - Arguments to create a UnitPhoto.
     * @example
     * // Create one UnitPhoto
     * const UnitPhoto = await prisma.unitPhoto.create({
     *   data: {
     *     // ... data to create a UnitPhoto
     *   }
     * })
     * 
     */
    create<T extends UnitPhotoCreateArgs>(args: SelectSubset<T, UnitPhotoCreateArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnitPhotos.
     * @param {UnitPhotoCreateManyArgs} args - Arguments to create many UnitPhotos.
     * @example
     * // Create many UnitPhotos
     * const unitPhoto = await prisma.unitPhoto.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnitPhotoCreateManyArgs>(args?: SelectSubset<T, UnitPhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UnitPhotos and returns the data saved in the database.
     * @param {UnitPhotoCreateManyAndReturnArgs} args - Arguments to create many UnitPhotos.
     * @example
     * // Create many UnitPhotos
     * const unitPhoto = await prisma.unitPhoto.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UnitPhotos and only return the `id`
     * const unitPhotoWithIdOnly = await prisma.unitPhoto.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UnitPhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, UnitPhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UnitPhoto.
     * @param {UnitPhotoDeleteArgs} args - Arguments to delete one UnitPhoto.
     * @example
     * // Delete one UnitPhoto
     * const UnitPhoto = await prisma.unitPhoto.delete({
     *   where: {
     *     // ... filter to delete one UnitPhoto
     *   }
     * })
     * 
     */
    delete<T extends UnitPhotoDeleteArgs>(args: SelectSubset<T, UnitPhotoDeleteArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnitPhoto.
     * @param {UnitPhotoUpdateArgs} args - Arguments to update one UnitPhoto.
     * @example
     * // Update one UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnitPhotoUpdateArgs>(args: SelectSubset<T, UnitPhotoUpdateArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnitPhotos.
     * @param {UnitPhotoDeleteManyArgs} args - Arguments to filter UnitPhotos to delete.
     * @example
     * // Delete a few UnitPhotos
     * const { count } = await prisma.unitPhoto.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnitPhotoDeleteManyArgs>(args?: SelectSubset<T, UnitPhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnitPhotos
     * const unitPhoto = await prisma.unitPhoto.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnitPhotoUpdateManyArgs>(args: SelectSubset<T, UnitPhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnitPhotos and returns the data updated in the database.
     * @param {UnitPhotoUpdateManyAndReturnArgs} args - Arguments to update many UnitPhotos.
     * @example
     * // Update many UnitPhotos
     * const unitPhoto = await prisma.unitPhoto.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UnitPhotos and only return the `id`
     * const unitPhotoWithIdOnly = await prisma.unitPhoto.updateManyAndReturn({
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
    updateManyAndReturn<T extends UnitPhotoUpdateManyAndReturnArgs>(args: SelectSubset<T, UnitPhotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UnitPhoto.
     * @param {UnitPhotoUpsertArgs} args - Arguments to update or create a UnitPhoto.
     * @example
     * // Update or create a UnitPhoto
     * const unitPhoto = await prisma.unitPhoto.upsert({
     *   create: {
     *     // ... data to create a UnitPhoto
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnitPhoto we want to update
     *   }
     * })
     */
    upsert<T extends UnitPhotoUpsertArgs>(args: SelectSubset<T, UnitPhotoUpsertArgs<ExtArgs>>): Prisma__UnitPhotoClient<$Result.GetResult<Prisma.$UnitPhotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnitPhotos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoCountArgs} args - Arguments to filter UnitPhotos to count.
     * @example
     * // Count the number of UnitPhotos
     * const count = await prisma.unitPhoto.count({
     *   where: {
     *     // ... the filter for the UnitPhotos we want to count
     *   }
     * })
    **/
    count<T extends UnitPhotoCountArgs>(
      args?: Subset<T, UnitPhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnitPhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnitPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UnitPhotoAggregateArgs>(args: Subset<T, UnitPhotoAggregateArgs>): Prisma.PrismaPromise<GetUnitPhotoAggregateType<T>>

    /**
     * Group by UnitPhoto.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnitPhotoGroupByArgs} args - Group by arguments.
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
      T extends UnitPhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnitPhotoGroupByArgs['orderBy'] }
        : { orderBy?: UnitPhotoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UnitPhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnitPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnitPhoto model
   */
  readonly fields: UnitPhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnitPhoto.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnitPhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UnitPhoto model
   */
  interface UnitPhotoFieldRefs {
    readonly id: FieldRef<"UnitPhoto", 'String'>
    readonly unitId: FieldRef<"UnitPhoto", 'String'>
    readonly url: FieldRef<"UnitPhoto", 'String'>
    readonly caption: FieldRef<"UnitPhoto", 'String'>
    readonly order: FieldRef<"UnitPhoto", 'Int'>
    readonly isPrimary: FieldRef<"UnitPhoto", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UnitPhoto findUnique
   */
  export type UnitPhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UnitPhoto to fetch.
     */
    where: UnitPhotoWhereUniqueInput
  }

  /**
   * UnitPhoto findUniqueOrThrow
   */
  export type UnitPhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UnitPhoto to fetch.
     */
    where: UnitPhotoWhereUniqueInput
  }

  /**
   * UnitPhoto findFirst
   */
  export type UnitPhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UnitPhoto to fetch.
     */
    where?: UnitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitPhotos to fetch.
     */
    orderBy?: UnitPhotoOrderByWithRelationInput | UnitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitPhotos.
     */
    cursor?: UnitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitPhotos.
     */
    distinct?: UnitPhotoScalarFieldEnum | UnitPhotoScalarFieldEnum[]
  }

  /**
   * UnitPhoto findFirstOrThrow
   */
  export type UnitPhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UnitPhoto to fetch.
     */
    where?: UnitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitPhotos to fetch.
     */
    orderBy?: UnitPhotoOrderByWithRelationInput | UnitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnitPhotos.
     */
    cursor?: UnitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitPhotos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnitPhotos.
     */
    distinct?: UnitPhotoScalarFieldEnum | UnitPhotoScalarFieldEnum[]
  }

  /**
   * UnitPhoto findMany
   */
  export type UnitPhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter, which UnitPhotos to fetch.
     */
    where?: UnitPhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnitPhotos to fetch.
     */
    orderBy?: UnitPhotoOrderByWithRelationInput | UnitPhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnitPhotos.
     */
    cursor?: UnitPhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnitPhotos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnitPhotos.
     */
    skip?: number
    distinct?: UnitPhotoScalarFieldEnum | UnitPhotoScalarFieldEnum[]
  }

  /**
   * UnitPhoto create
   */
  export type UnitPhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a UnitPhoto.
     */
    data: XOR<UnitPhotoCreateInput, UnitPhotoUncheckedCreateInput>
  }

  /**
   * UnitPhoto createMany
   */
  export type UnitPhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnitPhotos.
     */
    data: UnitPhotoCreateManyInput | UnitPhotoCreateManyInput[]
  }

  /**
   * UnitPhoto createManyAndReturn
   */
  export type UnitPhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * The data used to create many UnitPhotos.
     */
    data: UnitPhotoCreateManyInput | UnitPhotoCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitPhoto update
   */
  export type UnitPhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a UnitPhoto.
     */
    data: XOR<UnitPhotoUpdateInput, UnitPhotoUncheckedUpdateInput>
    /**
     * Choose, which UnitPhoto to update.
     */
    where: UnitPhotoWhereUniqueInput
  }

  /**
   * UnitPhoto updateMany
   */
  export type UnitPhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnitPhotos.
     */
    data: XOR<UnitPhotoUpdateManyMutationInput, UnitPhotoUncheckedUpdateManyInput>
    /**
     * Filter which UnitPhotos to update
     */
    where?: UnitPhotoWhereInput
    /**
     * Limit how many UnitPhotos to update.
     */
    limit?: number
  }

  /**
   * UnitPhoto updateManyAndReturn
   */
  export type UnitPhotoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * The data used to update UnitPhotos.
     */
    data: XOR<UnitPhotoUpdateManyMutationInput, UnitPhotoUncheckedUpdateManyInput>
    /**
     * Filter which UnitPhotos to update
     */
    where?: UnitPhotoWhereInput
    /**
     * Limit how many UnitPhotos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UnitPhoto upsert
   */
  export type UnitPhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the UnitPhoto to update in case it exists.
     */
    where: UnitPhotoWhereUniqueInput
    /**
     * In case the UnitPhoto found by the `where` argument doesn't exist, create a new UnitPhoto with this data.
     */
    create: XOR<UnitPhotoCreateInput, UnitPhotoUncheckedCreateInput>
    /**
     * In case the UnitPhoto was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnitPhotoUpdateInput, UnitPhotoUncheckedUpdateInput>
  }

  /**
   * UnitPhoto delete
   */
  export type UnitPhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
    /**
     * Filter which UnitPhoto to delete.
     */
    where: UnitPhotoWhereUniqueInput
  }

  /**
   * UnitPhoto deleteMany
   */
  export type UnitPhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnitPhotos to delete
     */
    where?: UnitPhotoWhereInput
    /**
     * Limit how many UnitPhotos to delete.
     */
    limit?: number
  }

  /**
   * UnitPhoto without action
   */
  export type UnitPhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnitPhoto
     */
    select?: UnitPhotoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnitPhoto
     */
    omit?: UnitPhotoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitPhotoInclude<ExtArgs> | null
  }


  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityAvgAggregateOutputType = {
    price: number | null
    minStay: number | null
    maxStay: number | null
  }

  export type AvailabilitySumAggregateOutputType = {
    price: number | null
    minStay: number | null
    maxStay: number | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    date: Date | null
    available: boolean | null
    price: number | null
    minStay: number | null
    maxStay: number | null
    notes: string | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    date: Date | null
    available: boolean | null
    price: number | null
    minStay: number | null
    maxStay: number | null
    notes: string | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    unitId: number
    date: number
    available: number
    price: number
    minStay: number
    maxStay: number
    notes: number
    _all: number
  }


  export type AvailabilityAvgAggregateInputType = {
    price?: true
    minStay?: true
    maxStay?: true
  }

  export type AvailabilitySumAggregateInputType = {
    price?: true
    minStay?: true
    maxStay?: true
  }

  export type AvailabilityMinAggregateInputType = {
    id?: true
    unitId?: true
    date?: true
    available?: true
    price?: true
    minStay?: true
    maxStay?: true
    notes?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    unitId?: true
    date?: true
    available?: true
    price?: true
    minStay?: true
    maxStay?: true
    notes?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    unitId?: true
    date?: true
    available?: true
    price?: true
    minStay?: true
    maxStay?: true
    notes?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _avg?: AvailabilityAvgAggregateInputType
    _sum?: AvailabilitySumAggregateInputType
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    unitId: string
    date: Date
    available: boolean
    price: number | null
    minStay: number | null
    maxStay: number | null
    notes: string | null
    _count: AvailabilityCountAggregateOutputType | null
    _avg: AvailabilityAvgAggregateOutputType | null
    _sum: AvailabilitySumAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    date?: boolean
    available?: boolean
    price?: boolean
    minStay?: boolean
    maxStay?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    date?: boolean
    available?: boolean
    price?: boolean
    minStay?: boolean
    maxStay?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    date?: boolean
    available?: boolean
    price?: boolean
    minStay?: boolean
    maxStay?: boolean
    notes?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    unitId?: boolean
    date?: boolean
    available?: boolean
    price?: boolean
    minStay?: boolean
    maxStay?: boolean
    notes?: boolean
  }

  export type AvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "date" | "available" | "price" | "minStay" | "maxStay" | "notes", ExtArgs["result"]["availability"]>
  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type AvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      date: Date
      available: boolean
      price: number | null
      minStay: number | null
      maxStay: number | null
      notes: string | null
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }

  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailabilityFindUniqueArgs>(args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Availability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailabilityFindFirstArgs>(args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailabilityFindManyArgs>(args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
     */
    create<T extends AvailabilityCreateArgs>(args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Availabilities.
     * @param {AvailabilityCreateManyArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailabilityCreateManyArgs>(args?: SelectSubset<T, AvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Availabilities and returns the data saved in the database.
     * @param {AvailabilityCreateManyAndReturnArgs} args - Arguments to create many Availabilities.
     * @example
     * // Create many Availabilities
     * const availability = await prisma.availability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
     */
    delete<T extends AvailabilityDeleteArgs>(args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailabilityUpdateArgs>(args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailabilityDeleteManyArgs>(args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailabilityUpdateManyArgs>(args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities and returns the data updated in the database.
     * @param {AvailabilityUpdateManyAndReturnArgs} args - Arguments to update many Availabilities.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Availabilities and only return the `id`
     * const availabilityWithIdOnly = await prisma.availability.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
     */
    upsert<T extends AvailabilityUpsertArgs>(args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
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
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Availability model
   */
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly unitId: FieldRef<"Availability", 'String'>
    readonly date: FieldRef<"Availability", 'DateTime'>
    readonly available: FieldRef<"Availability", 'Boolean'>
    readonly price: FieldRef<"Availability", 'Float'>
    readonly minStay: FieldRef<"Availability", 'Int'>
    readonly maxStay: FieldRef<"Availability", 'Int'>
    readonly notes: FieldRef<"Availability", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }

  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }

  /**
   * Availability createMany
   */
  export type AvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
  }

  /**
   * Availability createManyAndReturn
   */
  export type AvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many Availabilities.
     */
    data: AvailabilityCreateManyInput | AvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
  }

  /**
   * Availability updateManyAndReturn
   */
  export type AvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }

  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }

  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
    /**
     * Limit how many Availabilities to delete.
     */
    limit?: number
  }

  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Availability
     */
    omit?: AvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingAvgAggregateOutputType = {
    totalPrice: number | null
    numberOfGuests: number | null
  }

  export type BookingSumAggregateOutputType = {
    totalPrice: number | null
    numberOfGuests: number | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    guestId: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    currency: string | null
    status: $Enums.BookingStatus | null
    source: $Enums.BookingSource | null
    externalId: string | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    numberOfGuests: number | null
    specialRequests: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    guestId: string | null
    checkIn: Date | null
    checkOut: Date | null
    totalPrice: number | null
    currency: string | null
    status: $Enums.BookingStatus | null
    source: $Enums.BookingSource | null
    externalId: string | null
    guestName: string | null
    guestEmail: string | null
    guestPhone: string | null
    numberOfGuests: number | null
    specialRequests: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    unitId: number
    guestId: number
    checkIn: number
    checkOut: number
    totalPrice: number
    currency: number
    status: number
    source: number
    externalId: number
    guestName: number
    guestEmail: number
    guestPhone: number
    numberOfGuests: number
    specialRequests: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookingAvgAggregateInputType = {
    totalPrice?: true
    numberOfGuests?: true
  }

  export type BookingSumAggregateInputType = {
    totalPrice?: true
    numberOfGuests?: true
  }

  export type BookingMinAggregateInputType = {
    id?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    currency?: true
    status?: true
    source?: true
    externalId?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    numberOfGuests?: true
    specialRequests?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    currency?: true
    status?: true
    source?: true
    externalId?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    numberOfGuests?: true
    specialRequests?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    unitId?: true
    guestId?: true
    checkIn?: true
    checkOut?: true
    totalPrice?: true
    currency?: true
    status?: true
    source?: true
    externalId?: true
    guestName?: true
    guestEmail?: true
    guestPhone?: true
    numberOfGuests?: true
    specialRequests?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _avg?: BookingAvgAggregateInputType
    _sum?: BookingSumAggregateInputType
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    unitId: string
    guestId: string
    checkIn: Date
    checkOut: Date
    totalPrice: number
    currency: string
    status: $Enums.BookingStatus
    source: $Enums.BookingSource
    externalId: string | null
    guestName: string
    guestEmail: string
    guestPhone: string | null
    numberOfGuests: number
    specialRequests: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: BookingCountAggregateOutputType | null
    _avg: BookingAvgAggregateOutputType | null
    _sum: BookingSumAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    currency?: boolean
    status?: boolean
    source?: boolean
    externalId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    numberOfGuests?: boolean
    specialRequests?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
    cleanings?: boolean | Booking$cleaningsArgs<ExtArgs>
    checkInOuts?: boolean | Booking$checkInOutsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    currency?: boolean
    status?: boolean
    source?: boolean
    externalId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    numberOfGuests?: boolean
    specialRequests?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    currency?: boolean
    status?: boolean
    source?: boolean
    externalId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    numberOfGuests?: boolean
    specialRequests?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    unitId?: boolean
    guestId?: boolean
    checkIn?: boolean
    checkOut?: boolean
    totalPrice?: boolean
    currency?: boolean
    status?: boolean
    source?: boolean
    externalId?: boolean
    guestName?: boolean
    guestEmail?: boolean
    guestPhone?: boolean
    numberOfGuests?: boolean
    specialRequests?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BookingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "guestId" | "checkIn" | "checkOut" | "totalPrice" | "currency" | "status" | "source" | "externalId" | "guestName" | "guestEmail" | "guestPhone" | "numberOfGuests" | "specialRequests" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["booking"]>
  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
    cleanings?: boolean | Booking$cleaningsArgs<ExtArgs>
    checkInOuts?: boolean | Booking$checkInOutsArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    guest?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      guest: Prisma.$UserPayload<ExtArgs>
      cleanings: Prisma.$CleaningPayload<ExtArgs>[]
      checkInOuts: Prisma.$CheckInOutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      guestId: string
      checkIn: Date
      checkOut: Date
      totalPrice: number
      currency: string
      status: $Enums.BookingStatus
      source: $Enums.BookingSource
      externalId: string | null
      guestName: string
      guestEmail: string
      guestPhone: string | null
      numberOfGuests: number
      specialRequests: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings and returns the data updated in the database.
     * @param {BookingUpdateManyAndReturnArgs} args - Arguments to update many Bookings.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.updateManyAndReturn({
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
    updateManyAndReturn<T extends BookingUpdateManyAndReturnArgs>(args: SelectSubset<T, BookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    guest<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cleanings<T extends Booking$cleaningsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$cleaningsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    checkInOuts<T extends Booking$checkInOutsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$checkInOutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Booking model
   */
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly unitId: FieldRef<"Booking", 'String'>
    readonly guestId: FieldRef<"Booking", 'String'>
    readonly checkIn: FieldRef<"Booking", 'DateTime'>
    readonly checkOut: FieldRef<"Booking", 'DateTime'>
    readonly totalPrice: FieldRef<"Booking", 'Float'>
    readonly currency: FieldRef<"Booking", 'String'>
    readonly status: FieldRef<"Booking", 'BookingStatus'>
    readonly source: FieldRef<"Booking", 'BookingSource'>
    readonly externalId: FieldRef<"Booking", 'String'>
    readonly guestName: FieldRef<"Booking", 'String'>
    readonly guestEmail: FieldRef<"Booking", 'String'>
    readonly guestPhone: FieldRef<"Booking", 'String'>
    readonly numberOfGuests: FieldRef<"Booking", 'Int'>
    readonly specialRequests: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
  }

  /**
   * Booking updateManyAndReturn
   */
  export type BookingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
    /**
     * Limit how many Bookings to delete.
     */
    limit?: number
  }

  /**
   * Booking.cleanings
   */
  export type Booking$cleaningsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    where?: CleaningWhereInput
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    cursor?: CleaningWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * Booking.checkInOuts
   */
  export type Booking$checkInOutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    where?: CheckInOutWhereInput
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    cursor?: CheckInOutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Cleaning
   */

  export type AggregateCleaning = {
    _count: CleaningCountAggregateOutputType | null
    _avg: CleaningAvgAggregateOutputType | null
    _sum: CleaningSumAggregateOutputType | null
    _min: CleaningMinAggregateOutputType | null
    _max: CleaningMaxAggregateOutputType | null
  }

  export type CleaningAvgAggregateOutputType = {
    cost: number | null
  }

  export type CleaningSumAggregateOutputType = {
    cost: number | null
  }

  export type CleaningMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    bookingId: string | null
    cleanerId: string | null
    scheduled: Date | null
    completed: Date | null
    notes: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type CleaningMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    bookingId: string | null
    cleanerId: string | null
    scheduled: Date | null
    completed: Date | null
    notes: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type CleaningCountAggregateOutputType = {
    id: number
    unitId: number
    bookingId: number
    cleanerId: number
    scheduled: number
    completed: number
    notes: number
    cost: number
    createdAt: number
    _all: number
  }


  export type CleaningAvgAggregateInputType = {
    cost?: true
  }

  export type CleaningSumAggregateInputType = {
    cost?: true
  }

  export type CleaningMinAggregateInputType = {
    id?: true
    unitId?: true
    bookingId?: true
    cleanerId?: true
    scheduled?: true
    completed?: true
    notes?: true
    cost?: true
    createdAt?: true
  }

  export type CleaningMaxAggregateInputType = {
    id?: true
    unitId?: true
    bookingId?: true
    cleanerId?: true
    scheduled?: true
    completed?: true
    notes?: true
    cost?: true
    createdAt?: true
  }

  export type CleaningCountAggregateInputType = {
    id?: true
    unitId?: true
    bookingId?: true
    cleanerId?: true
    scheduled?: true
    completed?: true
    notes?: true
    cost?: true
    createdAt?: true
    _all?: true
  }

  export type CleaningAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cleaning to aggregate.
     */
    where?: CleaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleanings to fetch.
     */
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CleaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cleanings
    **/
    _count?: true | CleaningCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CleaningAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CleaningSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CleaningMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CleaningMaxAggregateInputType
  }

  export type GetCleaningAggregateType<T extends CleaningAggregateArgs> = {
        [P in keyof T & keyof AggregateCleaning]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCleaning[P]>
      : GetScalarType<T[P], AggregateCleaning[P]>
  }




  export type CleaningGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CleaningWhereInput
    orderBy?: CleaningOrderByWithAggregationInput | CleaningOrderByWithAggregationInput[]
    by: CleaningScalarFieldEnum[] | CleaningScalarFieldEnum
    having?: CleaningScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CleaningCountAggregateInputType | true
    _avg?: CleaningAvgAggregateInputType
    _sum?: CleaningSumAggregateInputType
    _min?: CleaningMinAggregateInputType
    _max?: CleaningMaxAggregateInputType
  }

  export type CleaningGroupByOutputType = {
    id: string
    unitId: string
    bookingId: string | null
    cleanerId: string
    scheduled: Date
    completed: Date | null
    notes: string | null
    cost: number | null
    createdAt: Date
    _count: CleaningCountAggregateOutputType | null
    _avg: CleaningAvgAggregateOutputType | null
    _sum: CleaningSumAggregateOutputType | null
    _min: CleaningMinAggregateOutputType | null
    _max: CleaningMaxAggregateOutputType | null
  }

  type GetCleaningGroupByPayload<T extends CleaningGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CleaningGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CleaningGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CleaningGroupByOutputType[P]>
            : GetScalarType<T[P], CleaningGroupByOutputType[P]>
        }
      >
    >


  export type CleaningSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    bookingId?: boolean
    cleanerId?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    cost?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleaning"]>

  export type CleaningSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    bookingId?: boolean
    cleanerId?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    cost?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleaning"]>

  export type CleaningSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    bookingId?: boolean
    cleanerId?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    cost?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cleaning"]>

  export type CleaningSelectScalar = {
    id?: boolean
    unitId?: boolean
    bookingId?: boolean
    cleanerId?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    cost?: boolean
    createdAt?: boolean
  }

  export type CleaningOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "bookingId" | "cleanerId" | "scheduled" | "completed" | "notes" | "cost" | "createdAt", ExtArgs["result"]["cleaning"]>
  export type CleaningInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CleaningIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CleaningIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    booking?: boolean | Cleaning$bookingArgs<ExtArgs>
    cleaner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CleaningPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cleaning"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      booking: Prisma.$BookingPayload<ExtArgs> | null
      cleaner: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      bookingId: string | null
      cleanerId: string
      scheduled: Date
      completed: Date | null
      notes: string | null
      cost: number | null
      createdAt: Date
    }, ExtArgs["result"]["cleaning"]>
    composites: {}
  }

  type CleaningGetPayload<S extends boolean | null | undefined | CleaningDefaultArgs> = $Result.GetResult<Prisma.$CleaningPayload, S>

  type CleaningCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CleaningFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CleaningCountAggregateInputType | true
    }

  export interface CleaningDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cleaning'], meta: { name: 'Cleaning' } }
    /**
     * Find zero or one Cleaning that matches the filter.
     * @param {CleaningFindUniqueArgs} args - Arguments to find a Cleaning
     * @example
     * // Get one Cleaning
     * const cleaning = await prisma.cleaning.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CleaningFindUniqueArgs>(args: SelectSubset<T, CleaningFindUniqueArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cleaning that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CleaningFindUniqueOrThrowArgs} args - Arguments to find a Cleaning
     * @example
     * // Get one Cleaning
     * const cleaning = await prisma.cleaning.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CleaningFindUniqueOrThrowArgs>(args: SelectSubset<T, CleaningFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cleaning that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningFindFirstArgs} args - Arguments to find a Cleaning
     * @example
     * // Get one Cleaning
     * const cleaning = await prisma.cleaning.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CleaningFindFirstArgs>(args?: SelectSubset<T, CleaningFindFirstArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cleaning that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningFindFirstOrThrowArgs} args - Arguments to find a Cleaning
     * @example
     * // Get one Cleaning
     * const cleaning = await prisma.cleaning.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CleaningFindFirstOrThrowArgs>(args?: SelectSubset<T, CleaningFindFirstOrThrowArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cleanings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cleanings
     * const cleanings = await prisma.cleaning.findMany()
     * 
     * // Get first 10 Cleanings
     * const cleanings = await prisma.cleaning.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cleaningWithIdOnly = await prisma.cleaning.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CleaningFindManyArgs>(args?: SelectSubset<T, CleaningFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cleaning.
     * @param {CleaningCreateArgs} args - Arguments to create a Cleaning.
     * @example
     * // Create one Cleaning
     * const Cleaning = await prisma.cleaning.create({
     *   data: {
     *     // ... data to create a Cleaning
     *   }
     * })
     * 
     */
    create<T extends CleaningCreateArgs>(args: SelectSubset<T, CleaningCreateArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cleanings.
     * @param {CleaningCreateManyArgs} args - Arguments to create many Cleanings.
     * @example
     * // Create many Cleanings
     * const cleaning = await prisma.cleaning.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CleaningCreateManyArgs>(args?: SelectSubset<T, CleaningCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cleanings and returns the data saved in the database.
     * @param {CleaningCreateManyAndReturnArgs} args - Arguments to create many Cleanings.
     * @example
     * // Create many Cleanings
     * const cleaning = await prisma.cleaning.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cleanings and only return the `id`
     * const cleaningWithIdOnly = await prisma.cleaning.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CleaningCreateManyAndReturnArgs>(args?: SelectSubset<T, CleaningCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cleaning.
     * @param {CleaningDeleteArgs} args - Arguments to delete one Cleaning.
     * @example
     * // Delete one Cleaning
     * const Cleaning = await prisma.cleaning.delete({
     *   where: {
     *     // ... filter to delete one Cleaning
     *   }
     * })
     * 
     */
    delete<T extends CleaningDeleteArgs>(args: SelectSubset<T, CleaningDeleteArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cleaning.
     * @param {CleaningUpdateArgs} args - Arguments to update one Cleaning.
     * @example
     * // Update one Cleaning
     * const cleaning = await prisma.cleaning.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CleaningUpdateArgs>(args: SelectSubset<T, CleaningUpdateArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cleanings.
     * @param {CleaningDeleteManyArgs} args - Arguments to filter Cleanings to delete.
     * @example
     * // Delete a few Cleanings
     * const { count } = await prisma.cleaning.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CleaningDeleteManyArgs>(args?: SelectSubset<T, CleaningDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cleanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cleanings
     * const cleaning = await prisma.cleaning.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CleaningUpdateManyArgs>(args: SelectSubset<T, CleaningUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cleanings and returns the data updated in the database.
     * @param {CleaningUpdateManyAndReturnArgs} args - Arguments to update many Cleanings.
     * @example
     * // Update many Cleanings
     * const cleaning = await prisma.cleaning.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cleanings and only return the `id`
     * const cleaningWithIdOnly = await prisma.cleaning.updateManyAndReturn({
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
    updateManyAndReturn<T extends CleaningUpdateManyAndReturnArgs>(args: SelectSubset<T, CleaningUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cleaning.
     * @param {CleaningUpsertArgs} args - Arguments to update or create a Cleaning.
     * @example
     * // Update or create a Cleaning
     * const cleaning = await prisma.cleaning.upsert({
     *   create: {
     *     // ... data to create a Cleaning
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cleaning we want to update
     *   }
     * })
     */
    upsert<T extends CleaningUpsertArgs>(args: SelectSubset<T, CleaningUpsertArgs<ExtArgs>>): Prisma__CleaningClient<$Result.GetResult<Prisma.$CleaningPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cleanings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningCountArgs} args - Arguments to filter Cleanings to count.
     * @example
     * // Count the number of Cleanings
     * const count = await prisma.cleaning.count({
     *   where: {
     *     // ... the filter for the Cleanings we want to count
     *   }
     * })
    **/
    count<T extends CleaningCountArgs>(
      args?: Subset<T, CleaningCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CleaningCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cleaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CleaningAggregateArgs>(args: Subset<T, CleaningAggregateArgs>): Prisma.PrismaPromise<GetCleaningAggregateType<T>>

    /**
     * Group by Cleaning.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CleaningGroupByArgs} args - Group by arguments.
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
      T extends CleaningGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CleaningGroupByArgs['orderBy'] }
        : { orderBy?: CleaningGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CleaningGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCleaningGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cleaning model
   */
  readonly fields: CleaningFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cleaning.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CleaningClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    booking<T extends Cleaning$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Cleaning$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cleaner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Cleaning model
   */
  interface CleaningFieldRefs {
    readonly id: FieldRef<"Cleaning", 'String'>
    readonly unitId: FieldRef<"Cleaning", 'String'>
    readonly bookingId: FieldRef<"Cleaning", 'String'>
    readonly cleanerId: FieldRef<"Cleaning", 'String'>
    readonly scheduled: FieldRef<"Cleaning", 'DateTime'>
    readonly completed: FieldRef<"Cleaning", 'DateTime'>
    readonly notes: FieldRef<"Cleaning", 'String'>
    readonly cost: FieldRef<"Cleaning", 'Float'>
    readonly createdAt: FieldRef<"Cleaning", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cleaning findUnique
   */
  export type CleaningFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter, which Cleaning to fetch.
     */
    where: CleaningWhereUniqueInput
  }

  /**
   * Cleaning findUniqueOrThrow
   */
  export type CleaningFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter, which Cleaning to fetch.
     */
    where: CleaningWhereUniqueInput
  }

  /**
   * Cleaning findFirst
   */
  export type CleaningFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter, which Cleaning to fetch.
     */
    where?: CleaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleanings to fetch.
     */
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cleanings.
     */
    cursor?: CleaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cleanings.
     */
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * Cleaning findFirstOrThrow
   */
  export type CleaningFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter, which Cleaning to fetch.
     */
    where?: CleaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleanings to fetch.
     */
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cleanings.
     */
    cursor?: CleaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleanings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cleanings.
     */
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * Cleaning findMany
   */
  export type CleaningFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter, which Cleanings to fetch.
     */
    where?: CleaningWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cleanings to fetch.
     */
    orderBy?: CleaningOrderByWithRelationInput | CleaningOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cleanings.
     */
    cursor?: CleaningWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cleanings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cleanings.
     */
    skip?: number
    distinct?: CleaningScalarFieldEnum | CleaningScalarFieldEnum[]
  }

  /**
   * Cleaning create
   */
  export type CleaningCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * The data needed to create a Cleaning.
     */
    data: XOR<CleaningCreateInput, CleaningUncheckedCreateInput>
  }

  /**
   * Cleaning createMany
   */
  export type CleaningCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cleanings.
     */
    data: CleaningCreateManyInput | CleaningCreateManyInput[]
  }

  /**
   * Cleaning createManyAndReturn
   */
  export type CleaningCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * The data used to create many Cleanings.
     */
    data: CleaningCreateManyInput | CleaningCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cleaning update
   */
  export type CleaningUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * The data needed to update a Cleaning.
     */
    data: XOR<CleaningUpdateInput, CleaningUncheckedUpdateInput>
    /**
     * Choose, which Cleaning to update.
     */
    where: CleaningWhereUniqueInput
  }

  /**
   * Cleaning updateMany
   */
  export type CleaningUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cleanings.
     */
    data: XOR<CleaningUpdateManyMutationInput, CleaningUncheckedUpdateManyInput>
    /**
     * Filter which Cleanings to update
     */
    where?: CleaningWhereInput
    /**
     * Limit how many Cleanings to update.
     */
    limit?: number
  }

  /**
   * Cleaning updateManyAndReturn
   */
  export type CleaningUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * The data used to update Cleanings.
     */
    data: XOR<CleaningUpdateManyMutationInput, CleaningUncheckedUpdateManyInput>
    /**
     * Filter which Cleanings to update
     */
    where?: CleaningWhereInput
    /**
     * Limit how many Cleanings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cleaning upsert
   */
  export type CleaningUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * The filter to search for the Cleaning to update in case it exists.
     */
    where: CleaningWhereUniqueInput
    /**
     * In case the Cleaning found by the `where` argument doesn't exist, create a new Cleaning with this data.
     */
    create: XOR<CleaningCreateInput, CleaningUncheckedCreateInput>
    /**
     * In case the Cleaning was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CleaningUpdateInput, CleaningUncheckedUpdateInput>
  }

  /**
   * Cleaning delete
   */
  export type CleaningDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
    /**
     * Filter which Cleaning to delete.
     */
    where: CleaningWhereUniqueInput
  }

  /**
   * Cleaning deleteMany
   */
  export type CleaningDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cleanings to delete
     */
    where?: CleaningWhereInput
    /**
     * Limit how many Cleanings to delete.
     */
    limit?: number
  }

  /**
   * Cleaning.booking
   */
  export type Cleaning$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Booking
     */
    omit?: BookingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Cleaning without action
   */
  export type CleaningDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cleaning
     */
    select?: CleaningSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cleaning
     */
    omit?: CleaningOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CleaningInclude<ExtArgs> | null
  }


  /**
   * Model CheckInOut
   */

  export type AggregateCheckInOut = {
    _count: CheckInOutCountAggregateOutputType | null
    _min: CheckInOutMinAggregateOutputType | null
    _max: CheckInOutMaxAggregateOutputType | null
  }

  export type CheckInOutMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    unitId: string | null
    staffId: string | null
    type: string | null
    scheduled: Date | null
    completed: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type CheckInOutMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    unitId: string | null
    staffId: string | null
    type: string | null
    scheduled: Date | null
    completed: Date | null
    notes: string | null
    createdAt: Date | null
  }

  export type CheckInOutCountAggregateOutputType = {
    id: number
    bookingId: number
    unitId: number
    staffId: number
    type: number
    scheduled: number
    completed: number
    notes: number
    createdAt: number
    _all: number
  }


  export type CheckInOutMinAggregateInputType = {
    id?: true
    bookingId?: true
    unitId?: true
    staffId?: true
    type?: true
    scheduled?: true
    completed?: true
    notes?: true
    createdAt?: true
  }

  export type CheckInOutMaxAggregateInputType = {
    id?: true
    bookingId?: true
    unitId?: true
    staffId?: true
    type?: true
    scheduled?: true
    completed?: true
    notes?: true
    createdAt?: true
  }

  export type CheckInOutCountAggregateInputType = {
    id?: true
    bookingId?: true
    unitId?: true
    staffId?: true
    type?: true
    scheduled?: true
    completed?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type CheckInOutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckInOut to aggregate.
     */
    where?: CheckInOutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInOuts to fetch.
     */
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CheckInOutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInOuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInOuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CheckInOuts
    **/
    _count?: true | CheckInOutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CheckInOutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CheckInOutMaxAggregateInputType
  }

  export type GetCheckInOutAggregateType<T extends CheckInOutAggregateArgs> = {
        [P in keyof T & keyof AggregateCheckInOut]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCheckInOut[P]>
      : GetScalarType<T[P], AggregateCheckInOut[P]>
  }




  export type CheckInOutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CheckInOutWhereInput
    orderBy?: CheckInOutOrderByWithAggregationInput | CheckInOutOrderByWithAggregationInput[]
    by: CheckInOutScalarFieldEnum[] | CheckInOutScalarFieldEnum
    having?: CheckInOutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CheckInOutCountAggregateInputType | true
    _min?: CheckInOutMinAggregateInputType
    _max?: CheckInOutMaxAggregateInputType
  }

  export type CheckInOutGroupByOutputType = {
    id: string
    bookingId: string
    unitId: string
    staffId: string
    type: string
    scheduled: Date
    completed: Date | null
    notes: string | null
    createdAt: Date
    _count: CheckInOutCountAggregateOutputType | null
    _min: CheckInOutMinAggregateOutputType | null
    _max: CheckInOutMaxAggregateOutputType | null
  }

  type GetCheckInOutGroupByPayload<T extends CheckInOutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CheckInOutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CheckInOutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CheckInOutGroupByOutputType[P]>
            : GetScalarType<T[P], CheckInOutGroupByOutputType[P]>
        }
      >
    >


  export type CheckInOutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    unitId?: boolean
    staffId?: boolean
    type?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkInOut"]>

  export type CheckInOutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    unitId?: boolean
    staffId?: boolean
    type?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkInOut"]>

  export type CheckInOutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    unitId?: boolean
    staffId?: boolean
    type?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["checkInOut"]>

  export type CheckInOutSelectScalar = {
    id?: boolean
    bookingId?: boolean
    unitId?: boolean
    staffId?: boolean
    type?: boolean
    scheduled?: boolean
    completed?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type CheckInOutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookingId" | "unitId" | "staffId" | "type" | "scheduled" | "completed" | "notes" | "createdAt", ExtArgs["result"]["checkInOut"]>
  export type CheckInOutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CheckInOutIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CheckInOutIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    staff?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CheckInOutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CheckInOut"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs>
      staff: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      unitId: string
      staffId: string
      type: string
      scheduled: Date
      completed: Date | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["checkInOut"]>
    composites: {}
  }

  type CheckInOutGetPayload<S extends boolean | null | undefined | CheckInOutDefaultArgs> = $Result.GetResult<Prisma.$CheckInOutPayload, S>

  type CheckInOutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CheckInOutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CheckInOutCountAggregateInputType | true
    }

  export interface CheckInOutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CheckInOut'], meta: { name: 'CheckInOut' } }
    /**
     * Find zero or one CheckInOut that matches the filter.
     * @param {CheckInOutFindUniqueArgs} args - Arguments to find a CheckInOut
     * @example
     * // Get one CheckInOut
     * const checkInOut = await prisma.checkInOut.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CheckInOutFindUniqueArgs>(args: SelectSubset<T, CheckInOutFindUniqueArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CheckInOut that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CheckInOutFindUniqueOrThrowArgs} args - Arguments to find a CheckInOut
     * @example
     * // Get one CheckInOut
     * const checkInOut = await prisma.checkInOut.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CheckInOutFindUniqueOrThrowArgs>(args: SelectSubset<T, CheckInOutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckInOut that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutFindFirstArgs} args - Arguments to find a CheckInOut
     * @example
     * // Get one CheckInOut
     * const checkInOut = await prisma.checkInOut.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CheckInOutFindFirstArgs>(args?: SelectSubset<T, CheckInOutFindFirstArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CheckInOut that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutFindFirstOrThrowArgs} args - Arguments to find a CheckInOut
     * @example
     * // Get one CheckInOut
     * const checkInOut = await prisma.checkInOut.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CheckInOutFindFirstOrThrowArgs>(args?: SelectSubset<T, CheckInOutFindFirstOrThrowArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CheckInOuts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CheckInOuts
     * const checkInOuts = await prisma.checkInOut.findMany()
     * 
     * // Get first 10 CheckInOuts
     * const checkInOuts = await prisma.checkInOut.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const checkInOutWithIdOnly = await prisma.checkInOut.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CheckInOutFindManyArgs>(args?: SelectSubset<T, CheckInOutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CheckInOut.
     * @param {CheckInOutCreateArgs} args - Arguments to create a CheckInOut.
     * @example
     * // Create one CheckInOut
     * const CheckInOut = await prisma.checkInOut.create({
     *   data: {
     *     // ... data to create a CheckInOut
     *   }
     * })
     * 
     */
    create<T extends CheckInOutCreateArgs>(args: SelectSubset<T, CheckInOutCreateArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CheckInOuts.
     * @param {CheckInOutCreateManyArgs} args - Arguments to create many CheckInOuts.
     * @example
     * // Create many CheckInOuts
     * const checkInOut = await prisma.checkInOut.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CheckInOutCreateManyArgs>(args?: SelectSubset<T, CheckInOutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CheckInOuts and returns the data saved in the database.
     * @param {CheckInOutCreateManyAndReturnArgs} args - Arguments to create many CheckInOuts.
     * @example
     * // Create many CheckInOuts
     * const checkInOut = await prisma.checkInOut.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CheckInOuts and only return the `id`
     * const checkInOutWithIdOnly = await prisma.checkInOut.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CheckInOutCreateManyAndReturnArgs>(args?: SelectSubset<T, CheckInOutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CheckInOut.
     * @param {CheckInOutDeleteArgs} args - Arguments to delete one CheckInOut.
     * @example
     * // Delete one CheckInOut
     * const CheckInOut = await prisma.checkInOut.delete({
     *   where: {
     *     // ... filter to delete one CheckInOut
     *   }
     * })
     * 
     */
    delete<T extends CheckInOutDeleteArgs>(args: SelectSubset<T, CheckInOutDeleteArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CheckInOut.
     * @param {CheckInOutUpdateArgs} args - Arguments to update one CheckInOut.
     * @example
     * // Update one CheckInOut
     * const checkInOut = await prisma.checkInOut.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CheckInOutUpdateArgs>(args: SelectSubset<T, CheckInOutUpdateArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CheckInOuts.
     * @param {CheckInOutDeleteManyArgs} args - Arguments to filter CheckInOuts to delete.
     * @example
     * // Delete a few CheckInOuts
     * const { count } = await prisma.checkInOut.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CheckInOutDeleteManyArgs>(args?: SelectSubset<T, CheckInOutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckInOuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CheckInOuts
     * const checkInOut = await prisma.checkInOut.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CheckInOutUpdateManyArgs>(args: SelectSubset<T, CheckInOutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CheckInOuts and returns the data updated in the database.
     * @param {CheckInOutUpdateManyAndReturnArgs} args - Arguments to update many CheckInOuts.
     * @example
     * // Update many CheckInOuts
     * const checkInOut = await prisma.checkInOut.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CheckInOuts and only return the `id`
     * const checkInOutWithIdOnly = await prisma.checkInOut.updateManyAndReturn({
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
    updateManyAndReturn<T extends CheckInOutUpdateManyAndReturnArgs>(args: SelectSubset<T, CheckInOutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CheckInOut.
     * @param {CheckInOutUpsertArgs} args - Arguments to update or create a CheckInOut.
     * @example
     * // Update or create a CheckInOut
     * const checkInOut = await prisma.checkInOut.upsert({
     *   create: {
     *     // ... data to create a CheckInOut
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CheckInOut we want to update
     *   }
     * })
     */
    upsert<T extends CheckInOutUpsertArgs>(args: SelectSubset<T, CheckInOutUpsertArgs<ExtArgs>>): Prisma__CheckInOutClient<$Result.GetResult<Prisma.$CheckInOutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CheckInOuts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutCountArgs} args - Arguments to filter CheckInOuts to count.
     * @example
     * // Count the number of CheckInOuts
     * const count = await prisma.checkInOut.count({
     *   where: {
     *     // ... the filter for the CheckInOuts we want to count
     *   }
     * })
    **/
    count<T extends CheckInOutCountArgs>(
      args?: Subset<T, CheckInOutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CheckInOutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CheckInOut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CheckInOutAggregateArgs>(args: Subset<T, CheckInOutAggregateArgs>): Prisma.PrismaPromise<GetCheckInOutAggregateType<T>>

    /**
     * Group by CheckInOut.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CheckInOutGroupByArgs} args - Group by arguments.
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
      T extends CheckInOutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CheckInOutGroupByArgs['orderBy'] }
        : { orderBy?: CheckInOutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CheckInOutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCheckInOutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CheckInOut model
   */
  readonly fields: CheckInOutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CheckInOut.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CheckInOutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    staff<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CheckInOut model
   */
  interface CheckInOutFieldRefs {
    readonly id: FieldRef<"CheckInOut", 'String'>
    readonly bookingId: FieldRef<"CheckInOut", 'String'>
    readonly unitId: FieldRef<"CheckInOut", 'String'>
    readonly staffId: FieldRef<"CheckInOut", 'String'>
    readonly type: FieldRef<"CheckInOut", 'String'>
    readonly scheduled: FieldRef<"CheckInOut", 'DateTime'>
    readonly completed: FieldRef<"CheckInOut", 'DateTime'>
    readonly notes: FieldRef<"CheckInOut", 'String'>
    readonly createdAt: FieldRef<"CheckInOut", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CheckInOut findUnique
   */
  export type CheckInOutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter, which CheckInOut to fetch.
     */
    where: CheckInOutWhereUniqueInput
  }

  /**
   * CheckInOut findUniqueOrThrow
   */
  export type CheckInOutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter, which CheckInOut to fetch.
     */
    where: CheckInOutWhereUniqueInput
  }

  /**
   * CheckInOut findFirst
   */
  export type CheckInOutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter, which CheckInOut to fetch.
     */
    where?: CheckInOutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInOuts to fetch.
     */
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckInOuts.
     */
    cursor?: CheckInOutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInOuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInOuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckInOuts.
     */
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * CheckInOut findFirstOrThrow
   */
  export type CheckInOutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter, which CheckInOut to fetch.
     */
    where?: CheckInOutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInOuts to fetch.
     */
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CheckInOuts.
     */
    cursor?: CheckInOutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInOuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInOuts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CheckInOuts.
     */
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * CheckInOut findMany
   */
  export type CheckInOutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter, which CheckInOuts to fetch.
     */
    where?: CheckInOutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CheckInOuts to fetch.
     */
    orderBy?: CheckInOutOrderByWithRelationInput | CheckInOutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CheckInOuts.
     */
    cursor?: CheckInOutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CheckInOuts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CheckInOuts.
     */
    skip?: number
    distinct?: CheckInOutScalarFieldEnum | CheckInOutScalarFieldEnum[]
  }

  /**
   * CheckInOut create
   */
  export type CheckInOutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * The data needed to create a CheckInOut.
     */
    data: XOR<CheckInOutCreateInput, CheckInOutUncheckedCreateInput>
  }

  /**
   * CheckInOut createMany
   */
  export type CheckInOutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CheckInOuts.
     */
    data: CheckInOutCreateManyInput | CheckInOutCreateManyInput[]
  }

  /**
   * CheckInOut createManyAndReturn
   */
  export type CheckInOutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * The data used to create many CheckInOuts.
     */
    data: CheckInOutCreateManyInput | CheckInOutCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckInOut update
   */
  export type CheckInOutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * The data needed to update a CheckInOut.
     */
    data: XOR<CheckInOutUpdateInput, CheckInOutUncheckedUpdateInput>
    /**
     * Choose, which CheckInOut to update.
     */
    where: CheckInOutWhereUniqueInput
  }

  /**
   * CheckInOut updateMany
   */
  export type CheckInOutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CheckInOuts.
     */
    data: XOR<CheckInOutUpdateManyMutationInput, CheckInOutUncheckedUpdateManyInput>
    /**
     * Filter which CheckInOuts to update
     */
    where?: CheckInOutWhereInput
    /**
     * Limit how many CheckInOuts to update.
     */
    limit?: number
  }

  /**
   * CheckInOut updateManyAndReturn
   */
  export type CheckInOutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * The data used to update CheckInOuts.
     */
    data: XOR<CheckInOutUpdateManyMutationInput, CheckInOutUncheckedUpdateManyInput>
    /**
     * Filter which CheckInOuts to update
     */
    where?: CheckInOutWhereInput
    /**
     * Limit how many CheckInOuts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CheckInOut upsert
   */
  export type CheckInOutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * The filter to search for the CheckInOut to update in case it exists.
     */
    where: CheckInOutWhereUniqueInput
    /**
     * In case the CheckInOut found by the `where` argument doesn't exist, create a new CheckInOut with this data.
     */
    create: XOR<CheckInOutCreateInput, CheckInOutUncheckedCreateInput>
    /**
     * In case the CheckInOut was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CheckInOutUpdateInput, CheckInOutUncheckedUpdateInput>
  }

  /**
   * CheckInOut delete
   */
  export type CheckInOutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
    /**
     * Filter which CheckInOut to delete.
     */
    where: CheckInOutWhereUniqueInput
  }

  /**
   * CheckInOut deleteMany
   */
  export type CheckInOutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CheckInOuts to delete
     */
    where?: CheckInOutWhereInput
    /**
     * Limit how many CheckInOuts to delete.
     */
    limit?: number
  }

  /**
   * CheckInOut without action
   */
  export type CheckInOutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CheckInOut
     */
    select?: CheckInOutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CheckInOut
     */
    omit?: CheckInOutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CheckInOutInclude<ExtArgs> | null
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
    amount: number | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: number | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    userId: string | null
    unitId: string | null
    description: string | null
    amount: number | null
    currency: string | null
    category: string | null
    date: Date | null
    receipt: string | null
    createdAt: Date | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    unitId: string | null
    description: string | null
    amount: number | null
    currency: string | null
    category: string | null
    date: Date | null
    receipt: string | null
    createdAt: Date | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    userId: number
    unitId: number
    description: number
    amount: number
    currency: number
    category: number
    date: number
    receipt: number
    createdAt: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    userId?: true
    unitId?: true
    description?: true
    amount?: true
    currency?: true
    category?: true
    date?: true
    receipt?: true
    createdAt?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    userId?: true
    unitId?: true
    description?: true
    amount?: true
    currency?: true
    category?: true
    date?: true
    receipt?: true
    createdAt?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    userId?: true
    unitId?: true
    description?: true
    amount?: true
    currency?: true
    category?: true
    date?: true
    receipt?: true
    createdAt?: true
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
    id: string
    userId: string
    unitId: string | null
    description: string
    amount: number
    currency: string
    category: string | null
    date: Date
    receipt: string | null
    createdAt: Date
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
    userId?: boolean
    unitId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    date?: boolean
    receipt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    unitId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    date?: boolean
    receipt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    unitId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    date?: boolean
    receipt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type ExpenseSelectScalar = {
    id?: boolean
    userId?: boolean
    unitId?: boolean
    description?: boolean
    amount?: boolean
    currency?: boolean
    category?: boolean
    date?: boolean
    receipt?: boolean
    createdAt?: boolean
  }

  export type ExpenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "unitId" | "description" | "amount" | "currency" | "category" | "date" | "receipt" | "createdAt", ExtArgs["result"]["expense"]>
  export type ExpenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }
  export type ExpenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }
  export type ExpenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    unit?: boolean | Expense$unitArgs<ExtArgs>
  }

  export type $ExpensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Expense"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      unit: Prisma.$UnitPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      unitId: string | null
      description: string
      amount: number
      currency: string
      category: string | null
      date: Date
      receipt: string | null
      createdAt: Date
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unit<T extends Expense$unitArgs<ExtArgs> = {}>(args?: Subset<T, Expense$unitArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly id: FieldRef<"Expense", 'String'>
    readonly userId: FieldRef<"Expense", 'String'>
    readonly unitId: FieldRef<"Expense", 'String'>
    readonly description: FieldRef<"Expense", 'String'>
    readonly amount: FieldRef<"Expense", 'Float'>
    readonly currency: FieldRef<"Expense", 'String'>
    readonly category: FieldRef<"Expense", 'String'>
    readonly date: FieldRef<"Expense", 'DateTime'>
    readonly receipt: FieldRef<"Expense", 'String'>
    readonly createdAt: FieldRef<"Expense", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
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
   * Expense.unit
   */
  export type Expense$unitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Unit
     */
    select?: UnitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Unit
     */
    omit?: UnitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnitInclude<ExtArgs> | null
    where?: UnitWhereInput
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExpenseInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
    minQuantity: number | null
    cost: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
    minQuantity: number | null
    cost: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    unitId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    minQuantity: number | null
    cost: number | null
    supplier: string | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    unitId: string | null
    name: string | null
    description: string | null
    quantity: number | null
    minQuantity: number | null
    cost: number | null
    supplier: string | null
    lastUpdated: Date | null
    createdAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    unitId: number
    name: number
    description: number
    quantity: number
    minQuantity: number
    cost: number
    supplier: number
    lastUpdated: number
    createdAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
    minQuantity?: true
    cost?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
    minQuantity?: true
    cost?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    unitId?: true
    name?: true
    description?: true
    quantity?: true
    minQuantity?: true
    cost?: true
    supplier?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    unitId?: true
    name?: true
    description?: true
    quantity?: true
    minQuantity?: true
    cost?: true
    supplier?: true
    lastUpdated?: true
    createdAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    unitId?: true
    name?: true
    description?: true
    quantity?: true
    minQuantity?: true
    cost?: true
    supplier?: true
    lastUpdated?: true
    createdAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    unitId: string
    name: string
    description: string | null
    quantity: number
    minQuantity: number
    cost: number | null
    supplier: string | null
    lastUpdated: Date
    createdAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    minQuantity?: boolean
    cost?: boolean
    supplier?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    consumptions?: boolean | Inventory$consumptionsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    minQuantity?: boolean
    cost?: boolean
    supplier?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    unitId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    minQuantity?: boolean
    cost?: boolean
    supplier?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    unitId?: boolean
    name?: boolean
    description?: boolean
    quantity?: boolean
    minQuantity?: boolean
    cost?: boolean
    supplier?: boolean
    lastUpdated?: boolean
    createdAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "unitId" | "name" | "description" | "quantity" | "minQuantity" | "cost" | "supplier" | "lastUpdated" | "createdAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
    consumptions?: boolean | Inventory$consumptionsArgs<ExtArgs>
    _count?: boolean | InventoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    unit?: boolean | UnitDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      unit: Prisma.$UnitPayload<ExtArgs>
      consumptions: Prisma.$ConsumptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      unitId: string
      name: string
      description: string | null
      quantity: number
      minQuantity: number
      cost: number | null
      supplier: string | null
      lastUpdated: Date
      createdAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
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
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    unit<T extends UnitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnitDefaultArgs<ExtArgs>>): Prisma__UnitClient<$Result.GetResult<Prisma.$UnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    consumptions<T extends Inventory$consumptionsArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$consumptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly unitId: FieldRef<"Inventory", 'String'>
    readonly name: FieldRef<"Inventory", 'String'>
    readonly description: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Int'>
    readonly minQuantity: FieldRef<"Inventory", 'Int'>
    readonly cost: FieldRef<"Inventory", 'Float'>
    readonly supplier: FieldRef<"Inventory", 'String'>
    readonly lastUpdated: FieldRef<"Inventory", 'DateTime'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.consumptions
   */
  export type Inventory$consumptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    where?: ConsumptionWhereInput
    orderBy?: ConsumptionOrderByWithRelationInput | ConsumptionOrderByWithRelationInput[]
    cursor?: ConsumptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConsumptionScalarFieldEnum | ConsumptionScalarFieldEnum[]
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model Consumption
   */

  export type AggregateConsumption = {
    _count: ConsumptionCountAggregateOutputType | null
    _avg: ConsumptionAvgAggregateOutputType | null
    _sum: ConsumptionSumAggregateOutputType | null
    _min: ConsumptionMinAggregateOutputType | null
    _max: ConsumptionMaxAggregateOutputType | null
  }

  export type ConsumptionAvgAggregateOutputType = {
    quantity: number | null
  }

  export type ConsumptionSumAggregateOutputType = {
    quantity: number | null
  }

  export type ConsumptionMinAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    quantity: number | null
    notes: string | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type ConsumptionMaxAggregateOutputType = {
    id: string | null
    inventoryId: string | null
    quantity: number | null
    notes: string | null
    consumedAt: Date | null
    createdAt: Date | null
  }

  export type ConsumptionCountAggregateOutputType = {
    id: number
    inventoryId: number
    quantity: number
    notes: number
    consumedAt: number
    createdAt: number
    _all: number
  }


  export type ConsumptionAvgAggregateInputType = {
    quantity?: true
  }

  export type ConsumptionSumAggregateInputType = {
    quantity?: true
  }

  export type ConsumptionMinAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
    notes?: true
    consumedAt?: true
    createdAt?: true
  }

  export type ConsumptionMaxAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
    notes?: true
    consumedAt?: true
    createdAt?: true
  }

  export type ConsumptionCountAggregateInputType = {
    id?: true
    inventoryId?: true
    quantity?: true
    notes?: true
    consumedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ConsumptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumption to aggregate.
     */
    where?: ConsumptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumptions to fetch.
     */
    orderBy?: ConsumptionOrderByWithRelationInput | ConsumptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsumptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Consumptions
    **/
    _count?: true | ConsumptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsumptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsumptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsumptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsumptionMaxAggregateInputType
  }

  export type GetConsumptionAggregateType<T extends ConsumptionAggregateArgs> = {
        [P in keyof T & keyof AggregateConsumption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsumption[P]>
      : GetScalarType<T[P], AggregateConsumption[P]>
  }




  export type ConsumptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsumptionWhereInput
    orderBy?: ConsumptionOrderByWithAggregationInput | ConsumptionOrderByWithAggregationInput[]
    by: ConsumptionScalarFieldEnum[] | ConsumptionScalarFieldEnum
    having?: ConsumptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsumptionCountAggregateInputType | true
    _avg?: ConsumptionAvgAggregateInputType
    _sum?: ConsumptionSumAggregateInputType
    _min?: ConsumptionMinAggregateInputType
    _max?: ConsumptionMaxAggregateInputType
  }

  export type ConsumptionGroupByOutputType = {
    id: string
    inventoryId: string
    quantity: number
    notes: string | null
    consumedAt: Date
    createdAt: Date
    _count: ConsumptionCountAggregateOutputType | null
    _avg: ConsumptionAvgAggregateOutputType | null
    _sum: ConsumptionSumAggregateOutputType | null
    _min: ConsumptionMinAggregateOutputType | null
    _max: ConsumptionMaxAggregateOutputType | null
  }

  type GetConsumptionGroupByPayload<T extends ConsumptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsumptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsumptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsumptionGroupByOutputType[P]>
            : GetScalarType<T[P], ConsumptionGroupByOutputType[P]>
        }
      >
    >


  export type ConsumptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    quantity?: boolean
    notes?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumption"]>

  export type ConsumptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    quantity?: boolean
    notes?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumption"]>

  export type ConsumptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inventoryId?: boolean
    quantity?: boolean
    notes?: boolean
    consumedAt?: boolean
    createdAt?: boolean
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["consumption"]>

  export type ConsumptionSelectScalar = {
    id?: boolean
    inventoryId?: boolean
    quantity?: boolean
    notes?: boolean
    consumedAt?: boolean
    createdAt?: boolean
  }

  export type ConsumptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inventoryId" | "quantity" | "notes" | "consumedAt" | "createdAt", ExtArgs["result"]["consumption"]>
  export type ConsumptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type ConsumptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }
  export type ConsumptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | InventoryDefaultArgs<ExtArgs>
  }

  export type $ConsumptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Consumption"
    objects: {
      inventory: Prisma.$InventoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inventoryId: string
      quantity: number
      notes: string | null
      consumedAt: Date
      createdAt: Date
    }, ExtArgs["result"]["consumption"]>
    composites: {}
  }

  type ConsumptionGetPayload<S extends boolean | null | undefined | ConsumptionDefaultArgs> = $Result.GetResult<Prisma.$ConsumptionPayload, S>

  type ConsumptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsumptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsumptionCountAggregateInputType | true
    }

  export interface ConsumptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Consumption'], meta: { name: 'Consumption' } }
    /**
     * Find zero or one Consumption that matches the filter.
     * @param {ConsumptionFindUniqueArgs} args - Arguments to find a Consumption
     * @example
     * // Get one Consumption
     * const consumption = await prisma.consumption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsumptionFindUniqueArgs>(args: SelectSubset<T, ConsumptionFindUniqueArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Consumption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsumptionFindUniqueOrThrowArgs} args - Arguments to find a Consumption
     * @example
     * // Get one Consumption
     * const consumption = await prisma.consumption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsumptionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsumptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionFindFirstArgs} args - Arguments to find a Consumption
     * @example
     * // Get one Consumption
     * const consumption = await prisma.consumption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsumptionFindFirstArgs>(args?: SelectSubset<T, ConsumptionFindFirstArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Consumption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionFindFirstOrThrowArgs} args - Arguments to find a Consumption
     * @example
     * // Get one Consumption
     * const consumption = await prisma.consumption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsumptionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsumptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Consumptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Consumptions
     * const consumptions = await prisma.consumption.findMany()
     * 
     * // Get first 10 Consumptions
     * const consumptions = await prisma.consumption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consumptionWithIdOnly = await prisma.consumption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsumptionFindManyArgs>(args?: SelectSubset<T, ConsumptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Consumption.
     * @param {ConsumptionCreateArgs} args - Arguments to create a Consumption.
     * @example
     * // Create one Consumption
     * const Consumption = await prisma.consumption.create({
     *   data: {
     *     // ... data to create a Consumption
     *   }
     * })
     * 
     */
    create<T extends ConsumptionCreateArgs>(args: SelectSubset<T, ConsumptionCreateArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Consumptions.
     * @param {ConsumptionCreateManyArgs} args - Arguments to create many Consumptions.
     * @example
     * // Create many Consumptions
     * const consumption = await prisma.consumption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsumptionCreateManyArgs>(args?: SelectSubset<T, ConsumptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Consumptions and returns the data saved in the database.
     * @param {ConsumptionCreateManyAndReturnArgs} args - Arguments to create many Consumptions.
     * @example
     * // Create many Consumptions
     * const consumption = await prisma.consumption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Consumptions and only return the `id`
     * const consumptionWithIdOnly = await prisma.consumption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsumptionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsumptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Consumption.
     * @param {ConsumptionDeleteArgs} args - Arguments to delete one Consumption.
     * @example
     * // Delete one Consumption
     * const Consumption = await prisma.consumption.delete({
     *   where: {
     *     // ... filter to delete one Consumption
     *   }
     * })
     * 
     */
    delete<T extends ConsumptionDeleteArgs>(args: SelectSubset<T, ConsumptionDeleteArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Consumption.
     * @param {ConsumptionUpdateArgs} args - Arguments to update one Consumption.
     * @example
     * // Update one Consumption
     * const consumption = await prisma.consumption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsumptionUpdateArgs>(args: SelectSubset<T, ConsumptionUpdateArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Consumptions.
     * @param {ConsumptionDeleteManyArgs} args - Arguments to filter Consumptions to delete.
     * @example
     * // Delete a few Consumptions
     * const { count } = await prisma.consumption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsumptionDeleteManyArgs>(args?: SelectSubset<T, ConsumptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Consumptions
     * const consumption = await prisma.consumption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsumptionUpdateManyArgs>(args: SelectSubset<T, ConsumptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Consumptions and returns the data updated in the database.
     * @param {ConsumptionUpdateManyAndReturnArgs} args - Arguments to update many Consumptions.
     * @example
     * // Update many Consumptions
     * const consumption = await prisma.consumption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Consumptions and only return the `id`
     * const consumptionWithIdOnly = await prisma.consumption.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConsumptionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsumptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Consumption.
     * @param {ConsumptionUpsertArgs} args - Arguments to update or create a Consumption.
     * @example
     * // Update or create a Consumption
     * const consumption = await prisma.consumption.upsert({
     *   create: {
     *     // ... data to create a Consumption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Consumption we want to update
     *   }
     * })
     */
    upsert<T extends ConsumptionUpsertArgs>(args: SelectSubset<T, ConsumptionUpsertArgs<ExtArgs>>): Prisma__ConsumptionClient<$Result.GetResult<Prisma.$ConsumptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Consumptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionCountArgs} args - Arguments to filter Consumptions to count.
     * @example
     * // Count the number of Consumptions
     * const count = await prisma.consumption.count({
     *   where: {
     *     // ... the filter for the Consumptions we want to count
     *   }
     * })
    **/
    count<T extends ConsumptionCountArgs>(
      args?: Subset<T, ConsumptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsumptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Consumption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConsumptionAggregateArgs>(args: Subset<T, ConsumptionAggregateArgs>): Prisma.PrismaPromise<GetConsumptionAggregateType<T>>

    /**
     * Group by Consumption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsumptionGroupByArgs} args - Group by arguments.
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
      T extends ConsumptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsumptionGroupByArgs['orderBy'] }
        : { orderBy?: ConsumptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConsumptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsumptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Consumption model
   */
  readonly fields: ConsumptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Consumption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsumptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inventory<T extends InventoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InventoryDefaultArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Consumption model
   */
  interface ConsumptionFieldRefs {
    readonly id: FieldRef<"Consumption", 'String'>
    readonly inventoryId: FieldRef<"Consumption", 'String'>
    readonly quantity: FieldRef<"Consumption", 'Int'>
    readonly notes: FieldRef<"Consumption", 'String'>
    readonly consumedAt: FieldRef<"Consumption", 'DateTime'>
    readonly createdAt: FieldRef<"Consumption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Consumption findUnique
   */
  export type ConsumptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter, which Consumption to fetch.
     */
    where: ConsumptionWhereUniqueInput
  }

  /**
   * Consumption findUniqueOrThrow
   */
  export type ConsumptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter, which Consumption to fetch.
     */
    where: ConsumptionWhereUniqueInput
  }

  /**
   * Consumption findFirst
   */
  export type ConsumptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter, which Consumption to fetch.
     */
    where?: ConsumptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumptions to fetch.
     */
    orderBy?: ConsumptionOrderByWithRelationInput | ConsumptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumptions.
     */
    cursor?: ConsumptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumptions.
     */
    distinct?: ConsumptionScalarFieldEnum | ConsumptionScalarFieldEnum[]
  }

  /**
   * Consumption findFirstOrThrow
   */
  export type ConsumptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter, which Consumption to fetch.
     */
    where?: ConsumptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumptions to fetch.
     */
    orderBy?: ConsumptionOrderByWithRelationInput | ConsumptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Consumptions.
     */
    cursor?: ConsumptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Consumptions.
     */
    distinct?: ConsumptionScalarFieldEnum | ConsumptionScalarFieldEnum[]
  }

  /**
   * Consumption findMany
   */
  export type ConsumptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter, which Consumptions to fetch.
     */
    where?: ConsumptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Consumptions to fetch.
     */
    orderBy?: ConsumptionOrderByWithRelationInput | ConsumptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Consumptions.
     */
    cursor?: ConsumptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Consumptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Consumptions.
     */
    skip?: number
    distinct?: ConsumptionScalarFieldEnum | ConsumptionScalarFieldEnum[]
  }

  /**
   * Consumption create
   */
  export type ConsumptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Consumption.
     */
    data: XOR<ConsumptionCreateInput, ConsumptionUncheckedCreateInput>
  }

  /**
   * Consumption createMany
   */
  export type ConsumptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Consumptions.
     */
    data: ConsumptionCreateManyInput | ConsumptionCreateManyInput[]
  }

  /**
   * Consumption createManyAndReturn
   */
  export type ConsumptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * The data used to create many Consumptions.
     */
    data: ConsumptionCreateManyInput | ConsumptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumption update
   */
  export type ConsumptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Consumption.
     */
    data: XOR<ConsumptionUpdateInput, ConsumptionUncheckedUpdateInput>
    /**
     * Choose, which Consumption to update.
     */
    where: ConsumptionWhereUniqueInput
  }

  /**
   * Consumption updateMany
   */
  export type ConsumptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Consumptions.
     */
    data: XOR<ConsumptionUpdateManyMutationInput, ConsumptionUncheckedUpdateManyInput>
    /**
     * Filter which Consumptions to update
     */
    where?: ConsumptionWhereInput
    /**
     * Limit how many Consumptions to update.
     */
    limit?: number
  }

  /**
   * Consumption updateManyAndReturn
   */
  export type ConsumptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * The data used to update Consumptions.
     */
    data: XOR<ConsumptionUpdateManyMutationInput, ConsumptionUncheckedUpdateManyInput>
    /**
     * Filter which Consumptions to update
     */
    where?: ConsumptionWhereInput
    /**
     * Limit how many Consumptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Consumption upsert
   */
  export type ConsumptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Consumption to update in case it exists.
     */
    where: ConsumptionWhereUniqueInput
    /**
     * In case the Consumption found by the `where` argument doesn't exist, create a new Consumption with this data.
     */
    create: XOR<ConsumptionCreateInput, ConsumptionUncheckedCreateInput>
    /**
     * In case the Consumption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsumptionUpdateInput, ConsumptionUncheckedUpdateInput>
  }

  /**
   * Consumption delete
   */
  export type ConsumptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
    /**
     * Filter which Consumption to delete.
     */
    where: ConsumptionWhereUniqueInput
  }

  /**
   * Consumption deleteMany
   */
  export type ConsumptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Consumptions to delete
     */
    where?: ConsumptionWhereInput
    /**
     * Limit how many Consumptions to delete.
     */
    limit?: number
  }

  /**
   * Consumption without action
   */
  export type ConsumptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Consumption
     */
    select?: ConsumptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Consumption
     */
    omit?: ConsumptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConsumptionInclude<ExtArgs> | null
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
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    phone: 'phone',
    avatar: 'avatar',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const UnitScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    address: 'address',
    pricePerDay: 'pricePerDay',
    currency: 'currency',
    active: 'active',
    ownerId: 'ownerId'
  };

  export type UnitScalarFieldEnum = (typeof UnitScalarFieldEnum)[keyof typeof UnitScalarFieldEnum]


  export const UnitAmenityScalarFieldEnum: {
    unitId: 'unitId',
    amenityId: 'amenityId'
  };

  export type UnitAmenityScalarFieldEnum = (typeof UnitAmenityScalarFieldEnum)[keyof typeof UnitAmenityScalarFieldEnum]


  export const UnitPhotoScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    url: 'url',
    caption: 'caption',
    order: 'order',
    isPrimary: 'isPrimary'
  };

  export type UnitPhotoScalarFieldEnum = (typeof UnitPhotoScalarFieldEnum)[keyof typeof UnitPhotoScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    date: 'date',
    available: 'available',
    price: 'price',
    minStay: 'minStay',
    maxStay: 'maxStay',
    notes: 'notes'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    guestId: 'guestId',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    totalPrice: 'totalPrice',
    currency: 'currency',
    status: 'status',
    source: 'source',
    externalId: 'externalId',
    guestName: 'guestName',
    guestEmail: 'guestEmail',
    guestPhone: 'guestPhone',
    numberOfGuests: 'numberOfGuests',
    specialRequests: 'specialRequests',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const CleaningScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    bookingId: 'bookingId',
    cleanerId: 'cleanerId',
    scheduled: 'scheduled',
    completed: 'completed',
    notes: 'notes',
    cost: 'cost',
    createdAt: 'createdAt'
  };

  export type CleaningScalarFieldEnum = (typeof CleaningScalarFieldEnum)[keyof typeof CleaningScalarFieldEnum]


  export const CheckInOutScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    unitId: 'unitId',
    staffId: 'staffId',
    type: 'type',
    scheduled: 'scheduled',
    completed: 'completed',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type CheckInOutScalarFieldEnum = (typeof CheckInOutScalarFieldEnum)[keyof typeof CheckInOutScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    unitId: 'unitId',
    description: 'description',
    amount: 'amount',
    currency: 'currency',
    category: 'category',
    date: 'date',
    receipt: 'receipt',
    createdAt: 'createdAt'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    unitId: 'unitId',
    name: 'name',
    description: 'description',
    quantity: 'quantity',
    minQuantity: 'minQuantity',
    cost: 'cost',
    supplier: 'supplier',
    lastUpdated: 'lastUpdated',
    createdAt: 'createdAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const ConsumptionScalarFieldEnum: {
    id: 'id',
    inventoryId: 'inventoryId',
    quantity: 'quantity',
    notes: 'notes',
    consumedAt: 'consumedAt',
    createdAt: 'createdAt'
  };

  export type ConsumptionScalarFieldEnum = (typeof ConsumptionScalarFieldEnum)[keyof typeof ConsumptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingSource'
   */
  export type EnumBookingSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingSource'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedUnits?: UnitListRelationFilter
    bookings?: BookingListRelationFilter
    cleaningTasks?: CleaningListRelationFilter
    checkInOutTasks?: CheckInOutListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ownedUnits?: UnitOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    cleaningTasks?: CleaningOrderByRelationAggregateInput
    checkInOutTasks?: CheckInOutOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    phone?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedUnits?: UnitListRelationFilter
    bookings?: BookingListRelationFilter
    cleaningTasks?: CleaningListRelationFilter
    checkInOutTasks?: CheckInOutListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: StringFilter<"Amenity"> | string
    name?: StringFilter<"Amenity"> | string
    logo?: StringNullableFilter<"Amenity"> | string | null
    units?: UnitAmenityListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    units?: UnitAmenityOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    logo?: StringNullableFilter<"Amenity"> | string | null
    units?: UnitAmenityListRelationFilter
  }, "id" | "name">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrderInput | SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Amenity"> | string
    name?: StringWithAggregatesFilter<"Amenity"> | string
    logo?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
  }

  export type UnitWhereInput = {
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    description?: StringNullableFilter<"Unit"> | string | null
    address?: StringFilter<"Unit"> | string
    pricePerDay?: FloatFilter<"Unit"> | number
    currency?: StringFilter<"Unit"> | string
    active?: BoolFilter<"Unit"> | boolean
    ownerId?: StringFilter<"Unit"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    amenities?: UnitAmenityListRelationFilter
    photos?: UnitPhotoListRelationFilter
    bookings?: BookingListRelationFilter
    availability?: AvailabilityListRelationFilter
    inventory?: InventoryListRelationFilter
    cleanings?: CleaningListRelationFilter
    checkInOuts?: CheckInOutListRelationFilter
    expenses?: ExpenseListRelationFilter
  }

  export type UnitOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    pricePerDay?: SortOrder
    currency?: SortOrder
    active?: SortOrder
    ownerId?: SortOrder
    owner?: UserOrderByWithRelationInput
    amenities?: UnitAmenityOrderByRelationAggregateInput
    photos?: UnitPhotoOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    inventory?: InventoryOrderByRelationAggregateInput
    cleanings?: CleaningOrderByRelationAggregateInput
    checkInOuts?: CheckInOutOrderByRelationAggregateInput
    expenses?: ExpenseOrderByRelationAggregateInput
  }

  export type UnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitWhereInput | UnitWhereInput[]
    OR?: UnitWhereInput[]
    NOT?: UnitWhereInput | UnitWhereInput[]
    name?: StringFilter<"Unit"> | string
    description?: StringNullableFilter<"Unit"> | string | null
    address?: StringFilter<"Unit"> | string
    pricePerDay?: FloatFilter<"Unit"> | number
    currency?: StringFilter<"Unit"> | string
    active?: BoolFilter<"Unit"> | boolean
    ownerId?: StringFilter<"Unit"> | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    amenities?: UnitAmenityListRelationFilter
    photos?: UnitPhotoListRelationFilter
    bookings?: BookingListRelationFilter
    availability?: AvailabilityListRelationFilter
    inventory?: InventoryListRelationFilter
    cleanings?: CleaningListRelationFilter
    checkInOuts?: CheckInOutListRelationFilter
    expenses?: ExpenseListRelationFilter
  }, "id">

  export type UnitOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    pricePerDay?: SortOrder
    currency?: SortOrder
    active?: SortOrder
    ownerId?: SortOrder
    _count?: UnitCountOrderByAggregateInput
    _avg?: UnitAvgOrderByAggregateInput
    _max?: UnitMaxOrderByAggregateInput
    _min?: UnitMinOrderByAggregateInput
    _sum?: UnitSumOrderByAggregateInput
  }

  export type UnitScalarWhereWithAggregatesInput = {
    AND?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    OR?: UnitScalarWhereWithAggregatesInput[]
    NOT?: UnitScalarWhereWithAggregatesInput | UnitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Unit"> | string
    name?: StringWithAggregatesFilter<"Unit"> | string
    description?: StringNullableWithAggregatesFilter<"Unit"> | string | null
    address?: StringWithAggregatesFilter<"Unit"> | string
    pricePerDay?: FloatWithAggregatesFilter<"Unit"> | number
    currency?: StringWithAggregatesFilter<"Unit"> | string
    active?: BoolWithAggregatesFilter<"Unit"> | boolean
    ownerId?: StringWithAggregatesFilter<"Unit"> | string
  }

  export type UnitAmenityWhereInput = {
    AND?: UnitAmenityWhereInput | UnitAmenityWhereInput[]
    OR?: UnitAmenityWhereInput[]
    NOT?: UnitAmenityWhereInput | UnitAmenityWhereInput[]
    unitId?: StringFilter<"UnitAmenity"> | string
    amenityId?: StringFilter<"UnitAmenity"> | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }

  export type UnitAmenityOrderByWithRelationInput = {
    unitId?: SortOrder
    amenityId?: SortOrder
    unit?: UnitOrderByWithRelationInput
    amenity?: AmenityOrderByWithRelationInput
  }

  export type UnitAmenityWhereUniqueInput = Prisma.AtLeast<{
    unitId_amenityId?: UnitAmenityUnitIdAmenityIdCompoundUniqueInput
    AND?: UnitAmenityWhereInput | UnitAmenityWhereInput[]
    OR?: UnitAmenityWhereInput[]
    NOT?: UnitAmenityWhereInput | UnitAmenityWhereInput[]
    unitId?: StringFilter<"UnitAmenity"> | string
    amenityId?: StringFilter<"UnitAmenity"> | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }, "unitId_amenityId">

  export type UnitAmenityOrderByWithAggregationInput = {
    unitId?: SortOrder
    amenityId?: SortOrder
    _count?: UnitAmenityCountOrderByAggregateInput
    _max?: UnitAmenityMaxOrderByAggregateInput
    _min?: UnitAmenityMinOrderByAggregateInput
  }

  export type UnitAmenityScalarWhereWithAggregatesInput = {
    AND?: UnitAmenityScalarWhereWithAggregatesInput | UnitAmenityScalarWhereWithAggregatesInput[]
    OR?: UnitAmenityScalarWhereWithAggregatesInput[]
    NOT?: UnitAmenityScalarWhereWithAggregatesInput | UnitAmenityScalarWhereWithAggregatesInput[]
    unitId?: StringWithAggregatesFilter<"UnitAmenity"> | string
    amenityId?: StringWithAggregatesFilter<"UnitAmenity"> | string
  }

  export type UnitPhotoWhereInput = {
    AND?: UnitPhotoWhereInput | UnitPhotoWhereInput[]
    OR?: UnitPhotoWhereInput[]
    NOT?: UnitPhotoWhereInput | UnitPhotoWhereInput[]
    id?: StringFilter<"UnitPhoto"> | string
    unitId?: StringFilter<"UnitPhoto"> | string
    url?: StringFilter<"UnitPhoto"> | string
    caption?: StringNullableFilter<"UnitPhoto"> | string | null
    order?: IntFilter<"UnitPhoto"> | number
    isPrimary?: BoolFilter<"UnitPhoto"> | boolean
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type UnitPhotoOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    unit?: UnitOrderByWithRelationInput
  }

  export type UnitPhotoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UnitPhotoWhereInput | UnitPhotoWhereInput[]
    OR?: UnitPhotoWhereInput[]
    NOT?: UnitPhotoWhereInput | UnitPhotoWhereInput[]
    unitId?: StringFilter<"UnitPhoto"> | string
    url?: StringFilter<"UnitPhoto"> | string
    caption?: StringNullableFilter<"UnitPhoto"> | string | null
    order?: IntFilter<"UnitPhoto"> | number
    isPrimary?: BoolFilter<"UnitPhoto"> | boolean
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id">

  export type UnitPhotoOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    url?: SortOrder
    caption?: SortOrderInput | SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
    _count?: UnitPhotoCountOrderByAggregateInput
    _avg?: UnitPhotoAvgOrderByAggregateInput
    _max?: UnitPhotoMaxOrderByAggregateInput
    _min?: UnitPhotoMinOrderByAggregateInput
    _sum?: UnitPhotoSumOrderByAggregateInput
  }

  export type UnitPhotoScalarWhereWithAggregatesInput = {
    AND?: UnitPhotoScalarWhereWithAggregatesInput | UnitPhotoScalarWhereWithAggregatesInput[]
    OR?: UnitPhotoScalarWhereWithAggregatesInput[]
    NOT?: UnitPhotoScalarWhereWithAggregatesInput | UnitPhotoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UnitPhoto"> | string
    unitId?: StringWithAggregatesFilter<"UnitPhoto"> | string
    url?: StringWithAggregatesFilter<"UnitPhoto"> | string
    caption?: StringNullableWithAggregatesFilter<"UnitPhoto"> | string | null
    order?: IntWithAggregatesFilter<"UnitPhoto"> | number
    isPrimary?: BoolWithAggregatesFilter<"UnitPhoto"> | boolean
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    unitId?: StringFilter<"Availability"> | string
    date?: DateTimeFilter<"Availability"> | Date | string
    available?: BoolFilter<"Availability"> | boolean
    price?: FloatNullableFilter<"Availability"> | number | null
    minStay?: IntNullableFilter<"Availability"> | number | null
    maxStay?: IntNullableFilter<"Availability"> | number | null
    notes?: StringNullableFilter<"Availability"> | string | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    date?: SortOrder
    available?: SortOrder
    price?: SortOrderInput | SortOrder
    minStay?: SortOrderInput | SortOrder
    maxStay?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    unit?: UnitOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unitId_date?: AvailabilityUnitIdDateCompoundUniqueInput
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    unitId?: StringFilter<"Availability"> | string
    date?: DateTimeFilter<"Availability"> | Date | string
    available?: BoolFilter<"Availability"> | boolean
    price?: FloatNullableFilter<"Availability"> | number | null
    minStay?: IntNullableFilter<"Availability"> | number | null
    maxStay?: IntNullableFilter<"Availability"> | number | null
    notes?: StringNullableFilter<"Availability"> | string | null
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
  }, "id" | "unitId_date">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    date?: SortOrder
    available?: SortOrder
    price?: SortOrderInput | SortOrder
    minStay?: SortOrderInput | SortOrder
    maxStay?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _avg?: AvailabilityAvgOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
    _sum?: AvailabilitySumOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    unitId?: StringWithAggregatesFilter<"Availability"> | string
    date?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    available?: BoolWithAggregatesFilter<"Availability"> | boolean
    price?: FloatNullableWithAggregatesFilter<"Availability"> | number | null
    minStay?: IntNullableWithAggregatesFilter<"Availability"> | number | null
    maxStay?: IntNullableWithAggregatesFilter<"Availability"> | number | null
    notes?: StringNullableWithAggregatesFilter<"Availability"> | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    unitId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    source?: EnumBookingSourceFilter<"Booking"> | $Enums.BookingSource
    externalId?: StringNullableFilter<"Booking"> | string | null
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    numberOfGuests?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    guest?: XOR<UserScalarRelationFilter, UserWhereInput>
    cleanings?: CleaningListRelationFilter
    checkInOuts?: CheckInOutListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    source?: SortOrder
    externalId?: SortOrderInput | SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrderInput | SortOrder
    numberOfGuests?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    guest?: UserOrderByWithRelationInput
    cleanings?: CleaningOrderByRelationAggregateInput
    checkInOuts?: CheckInOutOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    unitId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    source?: EnumBookingSourceFilter<"Booking"> | $Enums.BookingSource
    externalId?: StringNullableFilter<"Booking"> | string | null
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    numberOfGuests?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    guest?: XOR<UserScalarRelationFilter, UserWhereInput>
    cleanings?: CleaningListRelationFilter
    checkInOuts?: CheckInOutListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    source?: SortOrder
    externalId?: SortOrderInput | SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrderInput | SortOrder
    numberOfGuests?: SortOrder
    specialRequests?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _avg?: BookingAvgOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
    _sum?: BookingSumOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    unitId?: StringWithAggregatesFilter<"Booking"> | string
    guestId?: StringWithAggregatesFilter<"Booking"> | string
    checkIn?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    checkOut?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    totalPrice?: FloatWithAggregatesFilter<"Booking"> | number
    currency?: StringWithAggregatesFilter<"Booking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"Booking"> | $Enums.BookingStatus
    source?: EnumBookingSourceWithAggregatesFilter<"Booking"> | $Enums.BookingSource
    externalId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    guestName?: StringWithAggregatesFilter<"Booking"> | string
    guestEmail?: StringWithAggregatesFilter<"Booking"> | string
    guestPhone?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    numberOfGuests?: IntWithAggregatesFilter<"Booking"> | number
    specialRequests?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
  }

  export type CleaningWhereInput = {
    AND?: CleaningWhereInput | CleaningWhereInput[]
    OR?: CleaningWhereInput[]
    NOT?: CleaningWhereInput | CleaningWhereInput[]
    id?: StringFilter<"Cleaning"> | string
    unitId?: StringFilter<"Cleaning"> | string
    bookingId?: StringNullableFilter<"Cleaning"> | string | null
    cleanerId?: StringFilter<"Cleaning"> | string
    scheduled?: DateTimeFilter<"Cleaning"> | Date | string
    completed?: DateTimeNullableFilter<"Cleaning"> | Date | string | null
    notes?: StringNullableFilter<"Cleaning"> | string | null
    cost?: FloatNullableFilter<"Cleaning"> | number | null
    createdAt?: DateTimeFilter<"Cleaning"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    cleaner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CleaningOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    cleanerId?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    cleaner?: UserOrderByWithRelationInput
  }

  export type CleaningWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CleaningWhereInput | CleaningWhereInput[]
    OR?: CleaningWhereInput[]
    NOT?: CleaningWhereInput | CleaningWhereInput[]
    unitId?: StringFilter<"Cleaning"> | string
    bookingId?: StringNullableFilter<"Cleaning"> | string | null
    cleanerId?: StringFilter<"Cleaning"> | string
    scheduled?: DateTimeFilter<"Cleaning"> | Date | string
    completed?: DateTimeNullableFilter<"Cleaning"> | Date | string | null
    notes?: StringNullableFilter<"Cleaning"> | string | null
    cost?: FloatNullableFilter<"Cleaning"> | number | null
    createdAt?: DateTimeFilter<"Cleaning"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    booking?: XOR<BookingNullableScalarRelationFilter, BookingWhereInput> | null
    cleaner?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CleaningOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    bookingId?: SortOrderInput | SortOrder
    cleanerId?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    cost?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CleaningCountOrderByAggregateInput
    _avg?: CleaningAvgOrderByAggregateInput
    _max?: CleaningMaxOrderByAggregateInput
    _min?: CleaningMinOrderByAggregateInput
    _sum?: CleaningSumOrderByAggregateInput
  }

  export type CleaningScalarWhereWithAggregatesInput = {
    AND?: CleaningScalarWhereWithAggregatesInput | CleaningScalarWhereWithAggregatesInput[]
    OR?: CleaningScalarWhereWithAggregatesInput[]
    NOT?: CleaningScalarWhereWithAggregatesInput | CleaningScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cleaning"> | string
    unitId?: StringWithAggregatesFilter<"Cleaning"> | string
    bookingId?: StringNullableWithAggregatesFilter<"Cleaning"> | string | null
    cleanerId?: StringWithAggregatesFilter<"Cleaning"> | string
    scheduled?: DateTimeWithAggregatesFilter<"Cleaning"> | Date | string
    completed?: DateTimeNullableWithAggregatesFilter<"Cleaning"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Cleaning"> | string | null
    cost?: FloatNullableWithAggregatesFilter<"Cleaning"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Cleaning"> | Date | string
  }

  export type CheckInOutWhereInput = {
    AND?: CheckInOutWhereInput | CheckInOutWhereInput[]
    OR?: CheckInOutWhereInput[]
    NOT?: CheckInOutWhereInput | CheckInOutWhereInput[]
    id?: StringFilter<"CheckInOut"> | string
    bookingId?: StringFilter<"CheckInOut"> | string
    unitId?: StringFilter<"CheckInOut"> | string
    staffId?: StringFilter<"CheckInOut"> | string
    type?: StringFilter<"CheckInOut"> | string
    scheduled?: DateTimeFilter<"CheckInOut"> | Date | string
    completed?: DateTimeNullableFilter<"CheckInOut"> | Date | string | null
    notes?: StringNullableFilter<"CheckInOut"> | string | null
    createdAt?: DateTimeFilter<"CheckInOut"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CheckInOutOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    unitId?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
    staff?: UserOrderByWithRelationInput
  }

  export type CheckInOutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CheckInOutWhereInput | CheckInOutWhereInput[]
    OR?: CheckInOutWhereInput[]
    NOT?: CheckInOutWhereInput | CheckInOutWhereInput[]
    bookingId?: StringFilter<"CheckInOut"> | string
    unitId?: StringFilter<"CheckInOut"> | string
    staffId?: StringFilter<"CheckInOut"> | string
    type?: StringFilter<"CheckInOut"> | string
    scheduled?: DateTimeFilter<"CheckInOut"> | Date | string
    completed?: DateTimeNullableFilter<"CheckInOut"> | Date | string | null
    notes?: StringNullableFilter<"CheckInOut"> | string | null
    createdAt?: DateTimeFilter<"CheckInOut"> | Date | string
    booking?: XOR<BookingScalarRelationFilter, BookingWhereInput>
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    staff?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type CheckInOutOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    unitId?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CheckInOutCountOrderByAggregateInput
    _max?: CheckInOutMaxOrderByAggregateInput
    _min?: CheckInOutMinOrderByAggregateInput
  }

  export type CheckInOutScalarWhereWithAggregatesInput = {
    AND?: CheckInOutScalarWhereWithAggregatesInput | CheckInOutScalarWhereWithAggregatesInput[]
    OR?: CheckInOutScalarWhereWithAggregatesInput[]
    NOT?: CheckInOutScalarWhereWithAggregatesInput | CheckInOutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CheckInOut"> | string
    bookingId?: StringWithAggregatesFilter<"CheckInOut"> | string
    unitId?: StringWithAggregatesFilter<"CheckInOut"> | string
    staffId?: StringWithAggregatesFilter<"CheckInOut"> | string
    type?: StringWithAggregatesFilter<"CheckInOut"> | string
    scheduled?: DateTimeWithAggregatesFilter<"CheckInOut"> | Date | string
    completed?: DateTimeNullableWithAggregatesFilter<"CheckInOut"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"CheckInOut"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CheckInOut"> | Date | string
  }

  export type ExpenseWhereInput = {
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    id?: StringFilter<"Expense"> | string
    userId?: StringFilter<"Expense"> | string
    unitId?: StringNullableFilter<"Expense"> | string | null
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receipt?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
  }

  export type ExpenseOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrderInput | SortOrder
    date?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    unit?: UnitOrderByWithRelationInput
  }

  export type ExpenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExpenseWhereInput | ExpenseWhereInput[]
    OR?: ExpenseWhereInput[]
    NOT?: ExpenseWhereInput | ExpenseWhereInput[]
    userId?: StringFilter<"Expense"> | string
    unitId?: StringNullableFilter<"Expense"> | string | null
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receipt?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    unit?: XOR<UnitNullableScalarRelationFilter, UnitWhereInput> | null
  }, "id">

  export type ExpenseOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    unitId?: SortOrderInput | SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrderInput | SortOrder
    date?: SortOrder
    receipt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
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
    id?: StringWithAggregatesFilter<"Expense"> | string
    userId?: StringWithAggregatesFilter<"Expense"> | string
    unitId?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    description?: StringWithAggregatesFilter<"Expense"> | string
    amount?: FloatWithAggregatesFilter<"Expense"> | number
    currency?: StringWithAggregatesFilter<"Expense"> | string
    category?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    date?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
    receipt?: StringNullableWithAggregatesFilter<"Expense"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Expense"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    unitId?: StringFilter<"Inventory"> | string
    name?: StringFilter<"Inventory"> | string
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntFilter<"Inventory"> | number
    minQuantity?: IntFilter<"Inventory"> | number
    cost?: FloatNullableFilter<"Inventory"> | number | null
    supplier?: StringNullableFilter<"Inventory"> | string | null
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    consumptions?: ConsumptionListRelationFilter
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    unit?: UnitOrderByWithRelationInput
    consumptions?: ConsumptionOrderByRelationAggregateInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    unitId?: StringFilter<"Inventory"> | string
    name?: StringFilter<"Inventory"> | string
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntFilter<"Inventory"> | number
    minQuantity?: IntFilter<"Inventory"> | number
    cost?: FloatNullableFilter<"Inventory"> | number | null
    supplier?: StringNullableFilter<"Inventory"> | string | null
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    unit?: XOR<UnitScalarRelationFilter, UnitWhereInput>
    consumptions?: ConsumptionListRelationFilter
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrderInput | SortOrder
    supplier?: SortOrderInput | SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    unitId?: StringWithAggregatesFilter<"Inventory"> | string
    name?: StringWithAggregatesFilter<"Inventory"> | string
    description?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    quantity?: IntWithAggregatesFilter<"Inventory"> | number
    minQuantity?: IntWithAggregatesFilter<"Inventory"> | number
    cost?: FloatNullableWithAggregatesFilter<"Inventory"> | number | null
    supplier?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    lastUpdated?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type ConsumptionWhereInput = {
    AND?: ConsumptionWhereInput | ConsumptionWhereInput[]
    OR?: ConsumptionWhereInput[]
    NOT?: ConsumptionWhereInput | ConsumptionWhereInput[]
    id?: StringFilter<"Consumption"> | string
    inventoryId?: StringFilter<"Consumption"> | string
    quantity?: IntFilter<"Consumption"> | number
    notes?: StringNullableFilter<"Consumption"> | string | null
    consumedAt?: DateTimeFilter<"Consumption"> | Date | string
    createdAt?: DateTimeFilter<"Consumption"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }

  export type ConsumptionOrderByWithRelationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
    inventory?: InventoryOrderByWithRelationInput
  }

  export type ConsumptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsumptionWhereInput | ConsumptionWhereInput[]
    OR?: ConsumptionWhereInput[]
    NOT?: ConsumptionWhereInput | ConsumptionWhereInput[]
    inventoryId?: StringFilter<"Consumption"> | string
    quantity?: IntFilter<"Consumption"> | number
    notes?: StringNullableFilter<"Consumption"> | string | null
    consumedAt?: DateTimeFilter<"Consumption"> | Date | string
    createdAt?: DateTimeFilter<"Consumption"> | Date | string
    inventory?: XOR<InventoryScalarRelationFilter, InventoryWhereInput>
  }, "id">

  export type ConsumptionOrderByWithAggregationInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    notes?: SortOrderInput | SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ConsumptionCountOrderByAggregateInput
    _avg?: ConsumptionAvgOrderByAggregateInput
    _max?: ConsumptionMaxOrderByAggregateInput
    _min?: ConsumptionMinOrderByAggregateInput
    _sum?: ConsumptionSumOrderByAggregateInput
  }

  export type ConsumptionScalarWhereWithAggregatesInput = {
    AND?: ConsumptionScalarWhereWithAggregatesInput | ConsumptionScalarWhereWithAggregatesInput[]
    OR?: ConsumptionScalarWhereWithAggregatesInput[]
    NOT?: ConsumptionScalarWhereWithAggregatesInput | ConsumptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Consumption"> | string
    inventoryId?: StringWithAggregatesFilter<"Consumption"> | string
    quantity?: IntWithAggregatesFilter<"Consumption"> | number
    notes?: StringNullableWithAggregatesFilter<"Consumption"> | string | null
    consumedAt?: DateTimeWithAggregatesFilter<"Consumption"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Consumption"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutCreateNestedManyWithoutStaffInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningUncheckedCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutUncheckedCreateNestedManyWithoutStaffInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUncheckedUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUncheckedUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityCreateInput = {
    id?: string
    name: string
    logo?: string | null
    units?: UnitAmenityCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: string
    name: string
    logo?: string | null
    units?: UnitAmenityUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    units?: UnitAmenityUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    units?: UnitAmenityUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: string
    name: string
    logo?: string | null
  }

  export type AmenityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
  }

  export type UnitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitAmenityCreateInput = {
    unit: UnitCreateNestedOneWithoutAmenitiesInput
    amenity: AmenityCreateNestedOneWithoutUnitsInput
  }

  export type UnitAmenityUncheckedCreateInput = {
    unitId: string
    amenityId: string
  }

  export type UnitAmenityUpdateInput = {
    unit?: UnitUpdateOneRequiredWithoutAmenitiesNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type UnitAmenityUncheckedUpdateInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitAmenityCreateManyInput = {
    unitId: string
    amenityId: string
  }

  export type UnitAmenityUpdateManyMutationInput = {

  }

  export type UnitAmenityUncheckedUpdateManyInput = {
    unitId?: StringFieldUpdateOperationsInput | string
    amenityId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitPhotoCreateInput = {
    id?: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
    unit: UnitCreateNestedOneWithoutPhotosInput
  }

  export type UnitPhotoUncheckedCreateInput = {
    id?: string
    unitId: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type UnitPhotoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    unit?: UnitUpdateOneRequiredWithoutPhotosNestedInput
  }

  export type UnitPhotoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitPhotoCreateManyInput = {
    id?: string
    unitId: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type UnitPhotoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitPhotoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AvailabilityCreateInput = {
    id?: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
    unit: UnitCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    unitId: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: UnitUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityCreateManyInput = {
    id?: string
    unitId: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookingCreateInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutBookingsInput
    guest: UserCreateNestedOneWithoutBookingsInput
    cleanings?: CleaningCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    unitId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cleanings?: CleaningUncheckedCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutBookingsNestedInput
    guest?: UserUpdateOneRequiredWithoutBookingsNestedInput
    cleanings?: CleaningUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleanings?: CleaningUncheckedUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    unitId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningCreateInput = {
    id?: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutCleaningsInput
    booking?: BookingCreateNestedOneWithoutCleaningsInput
    cleaner: UserCreateNestedOneWithoutCleaningTasksInput
  }

  export type CleaningUncheckedCreateInput = {
    id?: string
    unitId: string
    bookingId?: string | null
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CleaningUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutCleaningsNestedInput
    booking?: BookingUpdateOneWithoutCleaningsNestedInput
    cleaner?: UserUpdateOneRequiredWithoutCleaningTasksNestedInput
  }

  export type CleaningUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningCreateManyInput = {
    id?: string
    unitId: string
    bookingId?: string | null
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CleaningUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutCreateInput = {
    id?: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutCheckInOutsInput
    unit: UnitCreateNestedOneWithoutCheckInOutsInput
    staff: UserCreateNestedOneWithoutCheckInOutTasksInput
  }

  export type CheckInOutUncheckedCreateInput = {
    id?: string
    bookingId: string
    unitId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CheckInOutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutCheckInOutsNestedInput
    unit?: UnitUpdateOneRequiredWithoutCheckInOutsNestedInput
    staff?: UserUpdateOneRequiredWithoutCheckInOutTasksNestedInput
  }

  export type CheckInOutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutCreateManyInput = {
    id?: string
    bookingId: string
    unitId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CheckInOutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateInput = {
    id?: string
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
    unit?: UnitCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateInput = {
    id?: string
    userId: string
    unitId?: string | null
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
    unit?: UnitUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseCreateManyInput = {
    id?: string
    userId: string
    unitId?: string | null
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type ExpenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutInventoryInput
    consumptions?: ConsumptionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    unitId: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    consumptions?: ConsumptionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutInventoryNestedInput
    consumptions?: ConsumptionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumptions?: ConsumptionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryCreateManyInput = {
    id?: string
    unitId: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionCreateInput = {
    id?: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
    inventory: InventoryCreateNestedOneWithoutConsumptionsInput
  }

  export type ConsumptionUncheckedCreateInput = {
    id?: string
    inventoryId: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
  }

  export type ConsumptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventory?: InventoryUpdateOneRequiredWithoutConsumptionsNestedInput
  }

  export type ConsumptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionCreateManyInput = {
    id?: string
    inventoryId: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
  }

  export type ConsumptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inventoryId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type UnitListRelationFilter = {
    every?: UnitWhereInput
    some?: UnitWhereInput
    none?: UnitWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type CleaningListRelationFilter = {
    every?: CleaningWhereInput
    some?: CleaningWhereInput
    none?: CleaningWhereInput
  }

  export type CheckInOutListRelationFilter = {
    every?: CheckInOutWhereInput
    some?: CheckInOutWhereInput
    none?: CheckInOutWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: ExpenseWhereInput
    some?: ExpenseWhereInput
    none?: ExpenseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UnitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CleaningOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CheckInOutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExpenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    avatar?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type UnitAmenityListRelationFilter = {
    every?: UnitAmenityWhereInput
    some?: UnitAmenityWhereInput
    none?: UnitAmenityWhereInput
  }

  export type UnitAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UnitPhotoListRelationFilter = {
    every?: UnitPhotoWhereInput
    some?: UnitPhotoWhereInput
    none?: UnitPhotoWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type UnitPhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UnitCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    pricePerDay?: SortOrder
    currency?: SortOrder
    active?: SortOrder
    ownerId?: SortOrder
  }

  export type UnitAvgOrderByAggregateInput = {
    pricePerDay?: SortOrder
  }

  export type UnitMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    pricePerDay?: SortOrder
    currency?: SortOrder
    active?: SortOrder
    ownerId?: SortOrder
  }

  export type UnitMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    pricePerDay?: SortOrder
    currency?: SortOrder
    active?: SortOrder
    ownerId?: SortOrder
  }

  export type UnitSumOrderByAggregateInput = {
    pricePerDay?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UnitScalarRelationFilter = {
    is?: UnitWhereInput
    isNot?: UnitWhereInput
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type UnitAmenityUnitIdAmenityIdCompoundUniqueInput = {
    unitId: string
    amenityId: string
  }

  export type UnitAmenityCountOrderByAggregateInput = {
    unitId?: SortOrder
    amenityId?: SortOrder
  }

  export type UnitAmenityMaxOrderByAggregateInput = {
    unitId?: SortOrder
    amenityId?: SortOrder
  }

  export type UnitAmenityMinOrderByAggregateInput = {
    unitId?: SortOrder
    amenityId?: SortOrder
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

  export type UnitPhotoCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type UnitPhotoAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type UnitPhotoMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type UnitPhotoMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    url?: SortOrder
    caption?: SortOrder
    order?: SortOrder
    isPrimary?: SortOrder
  }

  export type UnitPhotoSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type AvailabilityUnitIdDateCompoundUniqueInput = {
    unitId: string
    date: Date | string
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    date?: SortOrder
    available?: SortOrder
    price?: SortOrder
    minStay?: SortOrder
    maxStay?: SortOrder
    notes?: SortOrder
  }

  export type AvailabilityAvgOrderByAggregateInput = {
    price?: SortOrder
    minStay?: SortOrder
    maxStay?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    date?: SortOrder
    available?: SortOrder
    price?: SortOrder
    minStay?: SortOrder
    maxStay?: SortOrder
    notes?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    date?: SortOrder
    available?: SortOrder
    price?: SortOrder
    minStay?: SortOrder
    maxStay?: SortOrder
    notes?: SortOrder
  }

  export type AvailabilitySumOrderByAggregateInput = {
    price?: SortOrder
    minStay?: SortOrder
    maxStay?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumBookingSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSource | EnumBookingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSource[]
    notIn?: $Enums.BookingSource[]
    not?: NestedEnumBookingSourceFilter<$PrismaModel> | $Enums.BookingSource
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    numberOfGuests?: SortOrder
    specialRequests?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    numberOfGuests?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    numberOfGuests?: SortOrder
    specialRequests?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    guestId?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    totalPrice?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    source?: SortOrder
    externalId?: SortOrder
    guestName?: SortOrder
    guestEmail?: SortOrder
    guestPhone?: SortOrder
    numberOfGuests?: SortOrder
    specialRequests?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    numberOfGuests?: SortOrder
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumBookingSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSource | EnumBookingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSource[]
    notIn?: $Enums.BookingSource[]
    not?: NestedEnumBookingSourceWithAggregatesFilter<$PrismaModel> | $Enums.BookingSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingSourceFilter<$PrismaModel>
    _max?: NestedEnumBookingSourceFilter<$PrismaModel>
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

  export type BookingNullableScalarRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type CleaningCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    bookingId?: SortOrder
    cleanerId?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type CleaningAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type CleaningMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    bookingId?: SortOrder
    cleanerId?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type CleaningMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    bookingId?: SortOrder
    cleanerId?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type CleaningSumOrderByAggregateInput = {
    cost?: SortOrder
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

  export type BookingScalarRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type CheckInOutCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    unitId?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInOutMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    unitId?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type CheckInOutMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    unitId?: SortOrder
    staffId?: SortOrder
    type?: SortOrder
    scheduled?: SortOrder
    completed?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type UnitNullableScalarRelationFilter = {
    is?: UnitWhereInput | null
    isNot?: UnitWhereInput | null
  }

  export type ExpenseCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    unitId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    date?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ExpenseMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    unitId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    date?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    unitId?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    category?: SortOrder
    date?: SortOrder
    receipt?: SortOrder
    createdAt?: SortOrder
  }

  export type ExpenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ConsumptionListRelationFilter = {
    every?: ConsumptionWhereInput
    some?: ConsumptionWhereInput
    none?: ConsumptionWhereInput
  }

  export type ConsumptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    unitId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrder
    supplier?: SortOrder
    lastUpdated?: SortOrder
    createdAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
    minQuantity?: SortOrder
    cost?: SortOrder
  }

  export type InventoryScalarRelationFilter = {
    is?: InventoryWhereInput
    isNot?: InventoryWhereInput
  }

  export type ConsumptionCountOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsumptionAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type ConsumptionMaxOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsumptionMinOrderByAggregateInput = {
    id?: SortOrder
    inventoryId?: SortOrder
    quantity?: SortOrder
    notes?: SortOrder
    consumedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ConsumptionSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type UnitCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput> | UnitCreateWithoutOwnerInput[] | UnitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOwnerInput | UnitCreateOrConnectWithoutOwnerInput[]
    createMany?: UnitCreateManyOwnerInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CleaningCreateNestedManyWithoutCleanerInput = {
    create?: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput> | CleaningCreateWithoutCleanerInput[] | CleaningUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutCleanerInput | CleaningCreateOrConnectWithoutCleanerInput[]
    createMany?: CleaningCreateManyCleanerInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutCreateNestedManyWithoutStaffInput = {
    create?: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput> | CheckInOutCreateWithoutStaffInput[] | CheckInOutUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutStaffInput | CheckInOutCreateOrConnectWithoutStaffInput[]
    createMany?: CheckInOutCreateManyStaffInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UnitUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput> | UnitCreateWithoutOwnerInput[] | UnitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOwnerInput | UnitCreateOrConnectWithoutOwnerInput[]
    createMany?: UnitCreateManyOwnerInputEnvelope
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutGuestInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CleaningUncheckedCreateNestedManyWithoutCleanerInput = {
    create?: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput> | CleaningCreateWithoutCleanerInput[] | CleaningUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutCleanerInput | CleaningCreateOrConnectWithoutCleanerInput[]
    createMany?: CleaningCreateManyCleanerInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutUncheckedCreateNestedManyWithoutStaffInput = {
    create?: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput> | CheckInOutCreateWithoutStaffInput[] | CheckInOutUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutStaffInput | CheckInOutCreateOrConnectWithoutStaffInput[]
    createMany?: CheckInOutCreateManyStaffInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UnitUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput> | UnitCreateWithoutOwnerInput[] | UnitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOwnerInput | UnitCreateOrConnectWithoutOwnerInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutOwnerInput | UnitUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UnitCreateManyOwnerInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutOwnerInput | UnitUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutOwnerInput | UnitUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CleaningUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput> | CleaningCreateWithoutCleanerInput[] | CleaningUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutCleanerInput | CleaningCreateOrConnectWithoutCleanerInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutCleanerInput | CleaningUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: CleaningCreateManyCleanerInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutCleanerInput | CleaningUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutCleanerInput | CleaningUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUpdateManyWithoutStaffNestedInput = {
    create?: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput> | CheckInOutCreateWithoutStaffInput[] | CheckInOutUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutStaffInput | CheckInOutCreateOrConnectWithoutStaffInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutStaffInput | CheckInOutUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: CheckInOutCreateManyStaffInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutStaffInput | CheckInOutUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutStaffInput | CheckInOutUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UnitUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput> | UnitCreateWithoutOwnerInput[] | UnitUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UnitCreateOrConnectWithoutOwnerInput | UnitCreateOrConnectWithoutOwnerInput[]
    upsert?: UnitUpsertWithWhereUniqueWithoutOwnerInput | UnitUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UnitCreateManyOwnerInputEnvelope
    set?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    disconnect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    delete?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    connect?: UnitWhereUniqueInput | UnitWhereUniqueInput[]
    update?: UnitUpdateWithWhereUniqueWithoutOwnerInput | UnitUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UnitUpdateManyWithWhereWithoutOwnerInput | UnitUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UnitScalarWhereInput | UnitScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutGuestNestedInput = {
    create?: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput> | BookingCreateWithoutGuestInput[] | BookingUncheckedCreateWithoutGuestInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutGuestInput | BookingCreateOrConnectWithoutGuestInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutGuestInput | BookingUpsertWithWhereUniqueWithoutGuestInput[]
    createMany?: BookingCreateManyGuestInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutGuestInput | BookingUpdateWithWhereUniqueWithoutGuestInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutGuestInput | BookingUpdateManyWithWhereWithoutGuestInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CleaningUncheckedUpdateManyWithoutCleanerNestedInput = {
    create?: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput> | CleaningCreateWithoutCleanerInput[] | CleaningUncheckedCreateWithoutCleanerInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutCleanerInput | CleaningCreateOrConnectWithoutCleanerInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutCleanerInput | CleaningUpsertWithWhereUniqueWithoutCleanerInput[]
    createMany?: CleaningCreateManyCleanerInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutCleanerInput | CleaningUpdateWithWhereUniqueWithoutCleanerInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutCleanerInput | CleaningUpdateManyWithWhereWithoutCleanerInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUncheckedUpdateManyWithoutStaffNestedInput = {
    create?: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput> | CheckInOutCreateWithoutStaffInput[] | CheckInOutUncheckedCreateWithoutStaffInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutStaffInput | CheckInOutCreateOrConnectWithoutStaffInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutStaffInput | CheckInOutUpsertWithWhereUniqueWithoutStaffInput[]
    createMany?: CheckInOutCreateManyStaffInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutStaffInput | CheckInOutUpdateWithWhereUniqueWithoutStaffInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutStaffInput | CheckInOutUpdateManyWithWhereWithoutStaffInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput> | ExpenseCreateWithoutUserInput[] | ExpenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput | ExpenseCreateOrConnectWithoutUserInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput | ExpenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExpenseCreateManyUserInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUserInput | ExpenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput | ExpenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UnitAmenityCreateNestedManyWithoutAmenityInput = {
    create?: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput> | UnitAmenityCreateWithoutAmenityInput[] | UnitAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutAmenityInput | UnitAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: UnitAmenityCreateManyAmenityInputEnvelope
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
  }

  export type UnitAmenityUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput> | UnitAmenityCreateWithoutAmenityInput[] | UnitAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutAmenityInput | UnitAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: UnitAmenityCreateManyAmenityInputEnvelope
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
  }

  export type UnitAmenityUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput> | UnitAmenityCreateWithoutAmenityInput[] | UnitAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutAmenityInput | UnitAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: UnitAmenityUpsertWithWhereUniqueWithoutAmenityInput | UnitAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: UnitAmenityCreateManyAmenityInputEnvelope
    set?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    disconnect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    delete?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    update?: UnitAmenityUpdateWithWhereUniqueWithoutAmenityInput | UnitAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: UnitAmenityUpdateManyWithWhereWithoutAmenityInput | UnitAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
  }

  export type UnitAmenityUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput> | UnitAmenityCreateWithoutAmenityInput[] | UnitAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutAmenityInput | UnitAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: UnitAmenityUpsertWithWhereUniqueWithoutAmenityInput | UnitAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: UnitAmenityCreateManyAmenityInputEnvelope
    set?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    disconnect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    delete?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    update?: UnitAmenityUpdateWithWhereUniqueWithoutAmenityInput | UnitAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: UnitAmenityUpdateManyWithWhereWithoutAmenityInput | UnitAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedUnitsInput = {
    create?: XOR<UserCreateWithoutOwnedUnitsInput, UserUncheckedCreateWithoutOwnedUnitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedUnitsInput
    connect?: UserWhereUniqueInput
  }

  export type UnitAmenityCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput> | UnitAmenityCreateWithoutUnitInput[] | UnitAmenityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutUnitInput | UnitAmenityCreateOrConnectWithoutUnitInput[]
    createMany?: UnitAmenityCreateManyUnitInputEnvelope
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
  }

  export type UnitPhotoCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput> | UnitPhotoCreateWithoutUnitInput[] | UnitPhotoUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitPhotoCreateOrConnectWithoutUnitInput | UnitPhotoCreateOrConnectWithoutUnitInput[]
    createMany?: UnitPhotoCreateManyUnitInputEnvelope
    connect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUnitInput = {
    create?: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput> | BookingCreateWithoutUnitInput[] | BookingUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUnitInput | BookingCreateOrConnectWithoutUnitInput[]
    createMany?: BookingCreateManyUnitInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUnitInput = {
    create?: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput> | AvailabilityCreateWithoutUnitInput[] | AvailabilityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUnitInput | AvailabilityCreateOrConnectWithoutUnitInput[]
    createMany?: AvailabilityCreateManyUnitInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutUnitInput = {
    create?: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput> | InventoryCreateWithoutUnitInput[] | InventoryUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUnitInput | InventoryCreateOrConnectWithoutUnitInput[]
    createMany?: InventoryCreateManyUnitInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type CleaningCreateNestedManyWithoutUnitInput = {
    create?: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput> | CleaningCreateWithoutUnitInput[] | CleaningUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutUnitInput | CleaningCreateOrConnectWithoutUnitInput[]
    createMany?: CleaningCreateManyUnitInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutCreateNestedManyWithoutUnitInput = {
    create?: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput> | CheckInOutCreateWithoutUnitInput[] | CheckInOutUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutUnitInput | CheckInOutCreateOrConnectWithoutUnitInput[]
    createMany?: CheckInOutCreateManyUnitInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type ExpenseCreateNestedManyWithoutUnitInput = {
    create?: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput> | ExpenseCreateWithoutUnitInput[] | ExpenseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUnitInput | ExpenseCreateOrConnectWithoutUnitInput[]
    createMany?: ExpenseCreateManyUnitInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type UnitAmenityUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput> | UnitAmenityCreateWithoutUnitInput[] | UnitAmenityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutUnitInput | UnitAmenityCreateOrConnectWithoutUnitInput[]
    createMany?: UnitAmenityCreateManyUnitInputEnvelope
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
  }

  export type UnitPhotoUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput> | UnitPhotoCreateWithoutUnitInput[] | UnitPhotoUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitPhotoCreateOrConnectWithoutUnitInput | UnitPhotoCreateOrConnectWithoutUnitInput[]
    createMany?: UnitPhotoCreateManyUnitInputEnvelope
    connect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput> | BookingCreateWithoutUnitInput[] | BookingUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUnitInput | BookingCreateOrConnectWithoutUnitInput[]
    createMany?: BookingCreateManyUnitInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput> | AvailabilityCreateWithoutUnitInput[] | AvailabilityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUnitInput | AvailabilityCreateOrConnectWithoutUnitInput[]
    createMany?: AvailabilityCreateManyUnitInputEnvelope
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput> | InventoryCreateWithoutUnitInput[] | InventoryUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUnitInput | InventoryCreateOrConnectWithoutUnitInput[]
    createMany?: InventoryCreateManyUnitInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type CleaningUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput> | CleaningCreateWithoutUnitInput[] | CleaningUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutUnitInput | CleaningCreateOrConnectWithoutUnitInput[]
    createMany?: CleaningCreateManyUnitInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput> | CheckInOutCreateWithoutUnitInput[] | CheckInOutUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutUnitInput | CheckInOutCreateOrConnectWithoutUnitInput[]
    createMany?: CheckInOutCreateManyUnitInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type ExpenseUncheckedCreateNestedManyWithoutUnitInput = {
    create?: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput> | ExpenseCreateWithoutUnitInput[] | ExpenseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUnitInput | ExpenseCreateOrConnectWithoutUnitInput[]
    createMany?: ExpenseCreateManyUnitInputEnvelope
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutOwnedUnitsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedUnitsInput, UserUncheckedCreateWithoutOwnedUnitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedUnitsInput
    upsert?: UserUpsertWithoutOwnedUnitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedUnitsInput, UserUpdateWithoutOwnedUnitsInput>, UserUncheckedUpdateWithoutOwnedUnitsInput>
  }

  export type UnitAmenityUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput> | UnitAmenityCreateWithoutUnitInput[] | UnitAmenityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutUnitInput | UnitAmenityCreateOrConnectWithoutUnitInput[]
    upsert?: UnitAmenityUpsertWithWhereUniqueWithoutUnitInput | UnitAmenityUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitAmenityCreateManyUnitInputEnvelope
    set?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    disconnect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    delete?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    update?: UnitAmenityUpdateWithWhereUniqueWithoutUnitInput | UnitAmenityUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitAmenityUpdateManyWithWhereWithoutUnitInput | UnitAmenityUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
  }

  export type UnitPhotoUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput> | UnitPhotoCreateWithoutUnitInput[] | UnitPhotoUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitPhotoCreateOrConnectWithoutUnitInput | UnitPhotoCreateOrConnectWithoutUnitInput[]
    upsert?: UnitPhotoUpsertWithWhereUniqueWithoutUnitInput | UnitPhotoUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitPhotoCreateManyUnitInputEnvelope
    set?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    disconnect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    delete?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    connect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    update?: UnitPhotoUpdateWithWhereUniqueWithoutUnitInput | UnitPhotoUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitPhotoUpdateManyWithWhereWithoutUnitInput | UnitPhotoUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitPhotoScalarWhereInput | UnitPhotoScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUnitNestedInput = {
    create?: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput> | BookingCreateWithoutUnitInput[] | BookingUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUnitInput | BookingCreateOrConnectWithoutUnitInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUnitInput | BookingUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: BookingCreateManyUnitInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUnitInput | BookingUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUnitInput | BookingUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUnitNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput> | AvailabilityCreateWithoutUnitInput[] | AvailabilityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUnitInput | AvailabilityCreateOrConnectWithoutUnitInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUnitInput | AvailabilityUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: AvailabilityCreateManyUnitInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUnitInput | AvailabilityUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUnitInput | AvailabilityUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutUnitNestedInput = {
    create?: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput> | InventoryCreateWithoutUnitInput[] | InventoryUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUnitInput | InventoryCreateOrConnectWithoutUnitInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUnitInput | InventoryUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: InventoryCreateManyUnitInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUnitInput | InventoryUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUnitInput | InventoryUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type CleaningUpdateManyWithoutUnitNestedInput = {
    create?: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput> | CleaningCreateWithoutUnitInput[] | CleaningUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutUnitInput | CleaningCreateOrConnectWithoutUnitInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutUnitInput | CleaningUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: CleaningCreateManyUnitInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutUnitInput | CleaningUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutUnitInput | CleaningUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUpdateManyWithoutUnitNestedInput = {
    create?: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput> | CheckInOutCreateWithoutUnitInput[] | CheckInOutUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutUnitInput | CheckInOutCreateOrConnectWithoutUnitInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutUnitInput | CheckInOutUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: CheckInOutCreateManyUnitInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutUnitInput | CheckInOutUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutUnitInput | CheckInOutUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type ExpenseUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput> | ExpenseCreateWithoutUnitInput[] | ExpenseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUnitInput | ExpenseCreateOrConnectWithoutUnitInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUnitInput | ExpenseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ExpenseCreateManyUnitInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUnitInput | ExpenseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUnitInput | ExpenseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput> | UnitAmenityCreateWithoutUnitInput[] | UnitAmenityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitAmenityCreateOrConnectWithoutUnitInput | UnitAmenityCreateOrConnectWithoutUnitInput[]
    upsert?: UnitAmenityUpsertWithWhereUniqueWithoutUnitInput | UnitAmenityUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitAmenityCreateManyUnitInputEnvelope
    set?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    disconnect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    delete?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    connect?: UnitAmenityWhereUniqueInput | UnitAmenityWhereUniqueInput[]
    update?: UnitAmenityUpdateWithWhereUniqueWithoutUnitInput | UnitAmenityUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitAmenityUpdateManyWithWhereWithoutUnitInput | UnitAmenityUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
  }

  export type UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput> | UnitPhotoCreateWithoutUnitInput[] | UnitPhotoUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: UnitPhotoCreateOrConnectWithoutUnitInput | UnitPhotoCreateOrConnectWithoutUnitInput[]
    upsert?: UnitPhotoUpsertWithWhereUniqueWithoutUnitInput | UnitPhotoUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: UnitPhotoCreateManyUnitInputEnvelope
    set?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    disconnect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    delete?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    connect?: UnitPhotoWhereUniqueInput | UnitPhotoWhereUniqueInput[]
    update?: UnitPhotoUpdateWithWhereUniqueWithoutUnitInput | UnitPhotoUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: UnitPhotoUpdateManyWithWhereWithoutUnitInput | UnitPhotoUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: UnitPhotoScalarWhereInput | UnitPhotoScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput> | BookingCreateWithoutUnitInput[] | BookingUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUnitInput | BookingCreateOrConnectWithoutUnitInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUnitInput | BookingUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: BookingCreateManyUnitInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUnitInput | BookingUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUnitInput | BookingUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput> | AvailabilityCreateWithoutUnitInput[] | AvailabilityUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUnitInput | AvailabilityCreateOrConnectWithoutUnitInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUnitInput | AvailabilityUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: AvailabilityCreateManyUnitInputEnvelope
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUnitInput | AvailabilityUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUnitInput | AvailabilityUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput> | InventoryCreateWithoutUnitInput[] | InventoryUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutUnitInput | InventoryCreateOrConnectWithoutUnitInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutUnitInput | InventoryUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: InventoryCreateManyUnitInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutUnitInput | InventoryUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutUnitInput | InventoryUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type CleaningUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput> | CleaningCreateWithoutUnitInput[] | CleaningUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutUnitInput | CleaningCreateOrConnectWithoutUnitInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutUnitInput | CleaningUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: CleaningCreateManyUnitInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutUnitInput | CleaningUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutUnitInput | CleaningUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput> | CheckInOutCreateWithoutUnitInput[] | CheckInOutUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutUnitInput | CheckInOutCreateOrConnectWithoutUnitInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutUnitInput | CheckInOutUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: CheckInOutCreateManyUnitInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutUnitInput | CheckInOutUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutUnitInput | CheckInOutUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type ExpenseUncheckedUpdateManyWithoutUnitNestedInput = {
    create?: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput> | ExpenseCreateWithoutUnitInput[] | ExpenseUncheckedCreateWithoutUnitInput[]
    connectOrCreate?: ExpenseCreateOrConnectWithoutUnitInput | ExpenseCreateOrConnectWithoutUnitInput[]
    upsert?: ExpenseUpsertWithWhereUniqueWithoutUnitInput | ExpenseUpsertWithWhereUniqueWithoutUnitInput[]
    createMany?: ExpenseCreateManyUnitInputEnvelope
    set?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    disconnect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    delete?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    connect?: ExpenseWhereUniqueInput | ExpenseWhereUniqueInput[]
    update?: ExpenseUpdateWithWhereUniqueWithoutUnitInput | ExpenseUpdateWithWhereUniqueWithoutUnitInput[]
    updateMany?: ExpenseUpdateManyWithWhereWithoutUnitInput | ExpenseUpdateManyWithWhereWithoutUnitInput[]
    deleteMany?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<UnitCreateWithoutAmenitiesInput, UnitUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAmenitiesInput
    connect?: UnitWhereUniqueInput
  }

  export type AmenityCreateNestedOneWithoutUnitsInput = {
    create?: XOR<AmenityCreateWithoutUnitsInput, AmenityUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutUnitsInput
    connect?: AmenityWhereUniqueInput
  }

  export type UnitUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<UnitCreateWithoutAmenitiesInput, UnitUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAmenitiesInput
    upsert?: UnitUpsertWithoutAmenitiesInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutAmenitiesInput, UnitUpdateWithoutAmenitiesInput>, UnitUncheckedUpdateWithoutAmenitiesInput>
  }

  export type AmenityUpdateOneRequiredWithoutUnitsNestedInput = {
    create?: XOR<AmenityCreateWithoutUnitsInput, AmenityUncheckedCreateWithoutUnitsInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutUnitsInput
    upsert?: AmenityUpsertWithoutUnitsInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutUnitsInput, AmenityUpdateWithoutUnitsInput>, AmenityUncheckedUpdateWithoutUnitsInput>
  }

  export type UnitCreateNestedOneWithoutPhotosInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput
    connect?: UnitWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnitUpdateOneRequiredWithoutPhotosNestedInput = {
    create?: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
    connectOrCreate?: UnitCreateOrConnectWithoutPhotosInput
    upsert?: UnitUpsertWithoutPhotosInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutPhotosInput, UnitUpdateWithoutPhotosInput>, UnitUncheckedUpdateWithoutPhotosInput>
  }

  export type UnitCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UnitCreateWithoutAvailabilityInput, UnitUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAvailabilityInput
    connect?: UnitWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UnitUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UnitCreateWithoutAvailabilityInput, UnitUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UnitCreateOrConnectWithoutAvailabilityInput
    upsert?: UnitUpsertWithoutAvailabilityInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutAvailabilityInput, UnitUpdateWithoutAvailabilityInput>, UnitUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UnitCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UnitCreateWithoutBookingsInput, UnitUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutBookingsInput
    connect?: UnitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type CleaningCreateNestedManyWithoutBookingInput = {
    create?: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput> | CleaningCreateWithoutBookingInput[] | CleaningUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutBookingInput | CleaningCreateOrConnectWithoutBookingInput[]
    createMany?: CleaningCreateManyBookingInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutCreateNestedManyWithoutBookingInput = {
    create?: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput> | CheckInOutCreateWithoutBookingInput[] | CheckInOutUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutBookingInput | CheckInOutCreateOrConnectWithoutBookingInput[]
    createMany?: CheckInOutCreateManyBookingInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type CleaningUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput> | CleaningCreateWithoutBookingInput[] | CleaningUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutBookingInput | CleaningCreateOrConnectWithoutBookingInput[]
    createMany?: CleaningCreateManyBookingInputEnvelope
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
  }

  export type CheckInOutUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput> | CheckInOutCreateWithoutBookingInput[] | CheckInOutUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutBookingInput | CheckInOutCreateOrConnectWithoutBookingInput[]
    createMany?: CheckInOutCreateManyBookingInputEnvelope
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumBookingSourceFieldUpdateOperationsInput = {
    set?: $Enums.BookingSource
  }

  export type UnitUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UnitCreateWithoutBookingsInput, UnitUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutBookingsInput
    upsert?: UnitUpsertWithoutBookingsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutBookingsInput, UnitUpdateWithoutBookingsInput>, UnitUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type CleaningUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput> | CleaningCreateWithoutBookingInput[] | CleaningUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutBookingInput | CleaningCreateOrConnectWithoutBookingInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutBookingInput | CleaningUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CleaningCreateManyBookingInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutBookingInput | CleaningUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutBookingInput | CleaningUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput> | CheckInOutCreateWithoutBookingInput[] | CheckInOutUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutBookingInput | CheckInOutCreateOrConnectWithoutBookingInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutBookingInput | CheckInOutUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CheckInOutCreateManyBookingInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutBookingInput | CheckInOutUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutBookingInput | CheckInOutUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type CleaningUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput> | CleaningCreateWithoutBookingInput[] | CleaningUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CleaningCreateOrConnectWithoutBookingInput | CleaningCreateOrConnectWithoutBookingInput[]
    upsert?: CleaningUpsertWithWhereUniqueWithoutBookingInput | CleaningUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CleaningCreateManyBookingInputEnvelope
    set?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    disconnect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    delete?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    connect?: CleaningWhereUniqueInput | CleaningWhereUniqueInput[]
    update?: CleaningUpdateWithWhereUniqueWithoutBookingInput | CleaningUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CleaningUpdateManyWithWhereWithoutBookingInput | CleaningUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
  }

  export type CheckInOutUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput> | CheckInOutCreateWithoutBookingInput[] | CheckInOutUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: CheckInOutCreateOrConnectWithoutBookingInput | CheckInOutCreateOrConnectWithoutBookingInput[]
    upsert?: CheckInOutUpsertWithWhereUniqueWithoutBookingInput | CheckInOutUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: CheckInOutCreateManyBookingInputEnvelope
    set?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    disconnect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    delete?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    connect?: CheckInOutWhereUniqueInput | CheckInOutWhereUniqueInput[]
    update?: CheckInOutUpdateWithWhereUniqueWithoutBookingInput | CheckInOutUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: CheckInOutUpdateManyWithWhereWithoutBookingInput | CheckInOutUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
  }

  export type UnitCreateNestedOneWithoutCleaningsInput = {
    create?: XOR<UnitCreateWithoutCleaningsInput, UnitUncheckedCreateWithoutCleaningsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutCleaningsInput
    connect?: UnitWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutCleaningsInput = {
    create?: XOR<BookingCreateWithoutCleaningsInput, BookingUncheckedCreateWithoutCleaningsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCleaningsInput
    connect?: BookingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCleaningTasksInput = {
    create?: XOR<UserCreateWithoutCleaningTasksInput, UserUncheckedCreateWithoutCleaningTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCleaningTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UnitUpdateOneRequiredWithoutCleaningsNestedInput = {
    create?: XOR<UnitCreateWithoutCleaningsInput, UnitUncheckedCreateWithoutCleaningsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutCleaningsInput
    upsert?: UnitUpsertWithoutCleaningsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutCleaningsInput, UnitUpdateWithoutCleaningsInput>, UnitUncheckedUpdateWithoutCleaningsInput>
  }

  export type BookingUpdateOneWithoutCleaningsNestedInput = {
    create?: XOR<BookingCreateWithoutCleaningsInput, BookingUncheckedCreateWithoutCleaningsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCleaningsInput
    upsert?: BookingUpsertWithoutCleaningsInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCleaningsInput, BookingUpdateWithoutCleaningsInput>, BookingUncheckedUpdateWithoutCleaningsInput>
  }

  export type UserUpdateOneRequiredWithoutCleaningTasksNestedInput = {
    create?: XOR<UserCreateWithoutCleaningTasksInput, UserUncheckedCreateWithoutCleaningTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCleaningTasksInput
    upsert?: UserUpsertWithoutCleaningTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCleaningTasksInput, UserUpdateWithoutCleaningTasksInput>, UserUncheckedUpdateWithoutCleaningTasksInput>
  }

  export type BookingCreateNestedOneWithoutCheckInOutsInput = {
    create?: XOR<BookingCreateWithoutCheckInOutsInput, BookingUncheckedCreateWithoutCheckInOutsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCheckInOutsInput
    connect?: BookingWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutCheckInOutsInput = {
    create?: XOR<UnitCreateWithoutCheckInOutsInput, UnitUncheckedCreateWithoutCheckInOutsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutCheckInOutsInput
    connect?: UnitWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCheckInOutTasksInput = {
    create?: XOR<UserCreateWithoutCheckInOutTasksInput, UserUncheckedCreateWithoutCheckInOutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckInOutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutCheckInOutsNestedInput = {
    create?: XOR<BookingCreateWithoutCheckInOutsInput, BookingUncheckedCreateWithoutCheckInOutsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutCheckInOutsInput
    upsert?: BookingUpsertWithoutCheckInOutsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutCheckInOutsInput, BookingUpdateWithoutCheckInOutsInput>, BookingUncheckedUpdateWithoutCheckInOutsInput>
  }

  export type UnitUpdateOneRequiredWithoutCheckInOutsNestedInput = {
    create?: XOR<UnitCreateWithoutCheckInOutsInput, UnitUncheckedCreateWithoutCheckInOutsInput>
    connectOrCreate?: UnitCreateOrConnectWithoutCheckInOutsInput
    upsert?: UnitUpsertWithoutCheckInOutsInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutCheckInOutsInput, UnitUpdateWithoutCheckInOutsInput>, UnitUncheckedUpdateWithoutCheckInOutsInput>
  }

  export type UserUpdateOneRequiredWithoutCheckInOutTasksNestedInput = {
    create?: XOR<UserCreateWithoutCheckInOutTasksInput, UserUncheckedCreateWithoutCheckInOutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutCheckInOutTasksInput
    upsert?: UserUpsertWithoutCheckInOutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCheckInOutTasksInput, UserUpdateWithoutCheckInOutTasksInput>, UserUncheckedUpdateWithoutCheckInOutTasksInput>
  }

  export type UserCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    connect?: UserWhereUniqueInput
  }

  export type UnitCreateNestedOneWithoutExpensesInput = {
    create?: XOR<UnitCreateWithoutExpensesInput, UnitUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutExpensesInput
    connect?: UnitWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExpensesInput
    upsert?: UserUpsertWithoutExpensesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExpensesInput, UserUpdateWithoutExpensesInput>, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UnitUpdateOneWithoutExpensesNestedInput = {
    create?: XOR<UnitCreateWithoutExpensesInput, UnitUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: UnitCreateOrConnectWithoutExpensesInput
    upsert?: UnitUpsertWithoutExpensesInput
    disconnect?: UnitWhereInput | boolean
    delete?: UnitWhereInput | boolean
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutExpensesInput, UnitUpdateWithoutExpensesInput>, UnitUncheckedUpdateWithoutExpensesInput>
  }

  export type UnitCreateNestedOneWithoutInventoryInput = {
    create?: XOR<UnitCreateWithoutInventoryInput, UnitUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UnitCreateOrConnectWithoutInventoryInput
    connect?: UnitWhereUniqueInput
  }

  export type ConsumptionCreateNestedManyWithoutInventoryInput = {
    create?: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput> | ConsumptionCreateWithoutInventoryInput[] | ConsumptionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ConsumptionCreateOrConnectWithoutInventoryInput | ConsumptionCreateOrConnectWithoutInventoryInput[]
    createMany?: ConsumptionCreateManyInventoryInputEnvelope
    connect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
  }

  export type ConsumptionUncheckedCreateNestedManyWithoutInventoryInput = {
    create?: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput> | ConsumptionCreateWithoutInventoryInput[] | ConsumptionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ConsumptionCreateOrConnectWithoutInventoryInput | ConsumptionCreateOrConnectWithoutInventoryInput[]
    createMany?: ConsumptionCreateManyInventoryInputEnvelope
    connect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
  }

  export type UnitUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<UnitCreateWithoutInventoryInput, UnitUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: UnitCreateOrConnectWithoutInventoryInput
    upsert?: UnitUpsertWithoutInventoryInput
    connect?: UnitWhereUniqueInput
    update?: XOR<XOR<UnitUpdateToOneWithWhereWithoutInventoryInput, UnitUpdateWithoutInventoryInput>, UnitUncheckedUpdateWithoutInventoryInput>
  }

  export type ConsumptionUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput> | ConsumptionCreateWithoutInventoryInput[] | ConsumptionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ConsumptionCreateOrConnectWithoutInventoryInput | ConsumptionCreateOrConnectWithoutInventoryInput[]
    upsert?: ConsumptionUpsertWithWhereUniqueWithoutInventoryInput | ConsumptionUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: ConsumptionCreateManyInventoryInputEnvelope
    set?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    disconnect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    delete?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    connect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    update?: ConsumptionUpdateWithWhereUniqueWithoutInventoryInput | ConsumptionUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: ConsumptionUpdateManyWithWhereWithoutInventoryInput | ConsumptionUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: ConsumptionScalarWhereInput | ConsumptionScalarWhereInput[]
  }

  export type ConsumptionUncheckedUpdateManyWithoutInventoryNestedInput = {
    create?: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput> | ConsumptionCreateWithoutInventoryInput[] | ConsumptionUncheckedCreateWithoutInventoryInput[]
    connectOrCreate?: ConsumptionCreateOrConnectWithoutInventoryInput | ConsumptionCreateOrConnectWithoutInventoryInput[]
    upsert?: ConsumptionUpsertWithWhereUniqueWithoutInventoryInput | ConsumptionUpsertWithWhereUniqueWithoutInventoryInput[]
    createMany?: ConsumptionCreateManyInventoryInputEnvelope
    set?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    disconnect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    delete?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    connect?: ConsumptionWhereUniqueInput | ConsumptionWhereUniqueInput[]
    update?: ConsumptionUpdateWithWhereUniqueWithoutInventoryInput | ConsumptionUpdateWithWhereUniqueWithoutInventoryInput[]
    updateMany?: ConsumptionUpdateManyWithWhereWithoutInventoryInput | ConsumptionUpdateManyWithWhereWithoutInventoryInput[]
    deleteMany?: ConsumptionScalarWhereInput | ConsumptionScalarWhereInput[]
  }

  export type InventoryCreateNestedOneWithoutConsumptionsInput = {
    create?: XOR<InventoryCreateWithoutConsumptionsInput, InventoryUncheckedCreateWithoutConsumptionsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutConsumptionsInput
    connect?: InventoryWhereUniqueInput
  }

  export type InventoryUpdateOneRequiredWithoutConsumptionsNestedInput = {
    create?: XOR<InventoryCreateWithoutConsumptionsInput, InventoryUncheckedCreateWithoutConsumptionsInput>
    connectOrCreate?: InventoryCreateOrConnectWithoutConsumptionsInput
    upsert?: InventoryUpsertWithoutConsumptionsInput
    connect?: InventoryWhereUniqueInput
    update?: XOR<XOR<InventoryUpdateToOneWithWhereWithoutConsumptionsInput, InventoryUpdateWithoutConsumptionsInput>, InventoryUncheckedUpdateWithoutConsumptionsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[]
    notIn?: $Enums.UserRole[]
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumBookingSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSource | EnumBookingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSource[]
    notIn?: $Enums.BookingSource[]
    not?: NestedEnumBookingSourceFilter<$PrismaModel> | $Enums.BookingSource
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[]
    notIn?: $Enums.BookingStatus[]
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumBookingSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingSource | EnumBookingSourceFieldRefInput<$PrismaModel>
    in?: $Enums.BookingSource[]
    notIn?: $Enums.BookingSource[]
    not?: NestedEnumBookingSourceWithAggregatesFilter<$PrismaModel> | $Enums.BookingSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingSourceFilter<$PrismaModel>
    _max?: NestedEnumBookingSourceFilter<$PrismaModel>
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

  export type UnitCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutOwnerInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput>
  }

  export type UnitCreateManyOwnerInputEnvelope = {
    data: UnitCreateManyOwnerInput | UnitCreateManyOwnerInput[]
  }

  export type BookingCreateWithoutGuestInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutBookingsInput
    cleanings?: CleaningCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutGuestInput = {
    id?: string
    unitId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cleanings?: CleaningUncheckedCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutGuestInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingCreateManyGuestInputEnvelope = {
    data: BookingCreateManyGuestInput | BookingCreateManyGuestInput[]
  }

  export type CleaningCreateWithoutCleanerInput = {
    id?: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutCleaningsInput
    booking?: BookingCreateNestedOneWithoutCleaningsInput
  }

  export type CleaningUncheckedCreateWithoutCleanerInput = {
    id?: string
    unitId: string
    bookingId?: string | null
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CleaningCreateOrConnectWithoutCleanerInput = {
    where: CleaningWhereUniqueInput
    create: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput>
  }

  export type CleaningCreateManyCleanerInputEnvelope = {
    data: CleaningCreateManyCleanerInput | CleaningCreateManyCleanerInput[]
  }

  export type CheckInOutCreateWithoutStaffInput = {
    id?: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutCheckInOutsInput
    unit: UnitCreateNestedOneWithoutCheckInOutsInput
  }

  export type CheckInOutUncheckedCreateWithoutStaffInput = {
    id?: string
    bookingId: string
    unitId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateOrConnectWithoutStaffInput = {
    where: CheckInOutWhereUniqueInput
    create: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput>
  }

  export type CheckInOutCreateManyStaffInputEnvelope = {
    data: CheckInOutCreateManyStaffInput | CheckInOutCreateManyStaffInput[]
  }

  export type ExpenseCreateWithoutUserInput = {
    id?: string
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
    unit?: UnitCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutUserInput = {
    id?: string
    unitId?: string | null
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseCreateManyUserInputEnvelope = {
    data: ExpenseCreateManyUserInput | ExpenseCreateManyUserInput[]
  }

  export type UnitUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UnitWhereUniqueInput
    update: XOR<UnitUpdateWithoutOwnerInput, UnitUncheckedUpdateWithoutOwnerInput>
    create: XOR<UnitCreateWithoutOwnerInput, UnitUncheckedCreateWithoutOwnerInput>
  }

  export type UnitUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UnitWhereUniqueInput
    data: XOR<UnitUpdateWithoutOwnerInput, UnitUncheckedUpdateWithoutOwnerInput>
  }

  export type UnitUpdateManyWithWhereWithoutOwnerInput = {
    where: UnitScalarWhereInput
    data: XOR<UnitUpdateManyMutationInput, UnitUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UnitScalarWhereInput = {
    AND?: UnitScalarWhereInput | UnitScalarWhereInput[]
    OR?: UnitScalarWhereInput[]
    NOT?: UnitScalarWhereInput | UnitScalarWhereInput[]
    id?: StringFilter<"Unit"> | string
    name?: StringFilter<"Unit"> | string
    description?: StringNullableFilter<"Unit"> | string | null
    address?: StringFilter<"Unit"> | string
    pricePerDay?: FloatFilter<"Unit"> | number
    currency?: StringFilter<"Unit"> | string
    active?: BoolFilter<"Unit"> | boolean
    ownerId?: StringFilter<"Unit"> | string
  }

  export type BookingUpsertWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
    create: XOR<BookingCreateWithoutGuestInput, BookingUncheckedCreateWithoutGuestInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutGuestInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutGuestInput, BookingUncheckedUpdateWithoutGuestInput>
  }

  export type BookingUpdateManyWithWhereWithoutGuestInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutGuestInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    unitId?: StringFilter<"Booking"> | string
    guestId?: StringFilter<"Booking"> | string
    checkIn?: DateTimeFilter<"Booking"> | Date | string
    checkOut?: DateTimeFilter<"Booking"> | Date | string
    totalPrice?: FloatFilter<"Booking"> | number
    currency?: StringFilter<"Booking"> | string
    status?: EnumBookingStatusFilter<"Booking"> | $Enums.BookingStatus
    source?: EnumBookingSourceFilter<"Booking"> | $Enums.BookingSource
    externalId?: StringNullableFilter<"Booking"> | string | null
    guestName?: StringFilter<"Booking"> | string
    guestEmail?: StringFilter<"Booking"> | string
    guestPhone?: StringNullableFilter<"Booking"> | string | null
    numberOfGuests?: IntFilter<"Booking"> | number
    specialRequests?: StringNullableFilter<"Booking"> | string | null
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
  }

  export type CleaningUpsertWithWhereUniqueWithoutCleanerInput = {
    where: CleaningWhereUniqueInput
    update: XOR<CleaningUpdateWithoutCleanerInput, CleaningUncheckedUpdateWithoutCleanerInput>
    create: XOR<CleaningCreateWithoutCleanerInput, CleaningUncheckedCreateWithoutCleanerInput>
  }

  export type CleaningUpdateWithWhereUniqueWithoutCleanerInput = {
    where: CleaningWhereUniqueInput
    data: XOR<CleaningUpdateWithoutCleanerInput, CleaningUncheckedUpdateWithoutCleanerInput>
  }

  export type CleaningUpdateManyWithWhereWithoutCleanerInput = {
    where: CleaningScalarWhereInput
    data: XOR<CleaningUpdateManyMutationInput, CleaningUncheckedUpdateManyWithoutCleanerInput>
  }

  export type CleaningScalarWhereInput = {
    AND?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
    OR?: CleaningScalarWhereInput[]
    NOT?: CleaningScalarWhereInput | CleaningScalarWhereInput[]
    id?: StringFilter<"Cleaning"> | string
    unitId?: StringFilter<"Cleaning"> | string
    bookingId?: StringNullableFilter<"Cleaning"> | string | null
    cleanerId?: StringFilter<"Cleaning"> | string
    scheduled?: DateTimeFilter<"Cleaning"> | Date | string
    completed?: DateTimeNullableFilter<"Cleaning"> | Date | string | null
    notes?: StringNullableFilter<"Cleaning"> | string | null
    cost?: FloatNullableFilter<"Cleaning"> | number | null
    createdAt?: DateTimeFilter<"Cleaning"> | Date | string
  }

  export type CheckInOutUpsertWithWhereUniqueWithoutStaffInput = {
    where: CheckInOutWhereUniqueInput
    update: XOR<CheckInOutUpdateWithoutStaffInput, CheckInOutUncheckedUpdateWithoutStaffInput>
    create: XOR<CheckInOutCreateWithoutStaffInput, CheckInOutUncheckedCreateWithoutStaffInput>
  }

  export type CheckInOutUpdateWithWhereUniqueWithoutStaffInput = {
    where: CheckInOutWhereUniqueInput
    data: XOR<CheckInOutUpdateWithoutStaffInput, CheckInOutUncheckedUpdateWithoutStaffInput>
  }

  export type CheckInOutUpdateManyWithWhereWithoutStaffInput = {
    where: CheckInOutScalarWhereInput
    data: XOR<CheckInOutUpdateManyMutationInput, CheckInOutUncheckedUpdateManyWithoutStaffInput>
  }

  export type CheckInOutScalarWhereInput = {
    AND?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
    OR?: CheckInOutScalarWhereInput[]
    NOT?: CheckInOutScalarWhereInput | CheckInOutScalarWhereInput[]
    id?: StringFilter<"CheckInOut"> | string
    bookingId?: StringFilter<"CheckInOut"> | string
    unitId?: StringFilter<"CheckInOut"> | string
    staffId?: StringFilter<"CheckInOut"> | string
    type?: StringFilter<"CheckInOut"> | string
    scheduled?: DateTimeFilter<"CheckInOut"> | Date | string
    completed?: DateTimeNullableFilter<"CheckInOut"> | Date | string | null
    notes?: StringNullableFilter<"CheckInOut"> | string | null
    createdAt?: DateTimeFilter<"CheckInOut"> | Date | string
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
    create: XOR<ExpenseCreateWithoutUserInput, ExpenseUncheckedCreateWithoutUserInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUserInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUserInput, ExpenseUncheckedUpdateWithoutUserInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUserInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUserInput>
  }

  export type ExpenseScalarWhereInput = {
    AND?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    OR?: ExpenseScalarWhereInput[]
    NOT?: ExpenseScalarWhereInput | ExpenseScalarWhereInput[]
    id?: StringFilter<"Expense"> | string
    userId?: StringFilter<"Expense"> | string
    unitId?: StringNullableFilter<"Expense"> | string | null
    description?: StringFilter<"Expense"> | string
    amount?: FloatFilter<"Expense"> | number
    currency?: StringFilter<"Expense"> | string
    category?: StringNullableFilter<"Expense"> | string | null
    date?: DateTimeFilter<"Expense"> | Date | string
    receipt?: StringNullableFilter<"Expense"> | string | null
    createdAt?: DateTimeFilter<"Expense"> | Date | string
  }

  export type UnitAmenityCreateWithoutAmenityInput = {
    unit: UnitCreateNestedOneWithoutAmenitiesInput
  }

  export type UnitAmenityUncheckedCreateWithoutAmenityInput = {
    unitId: string
  }

  export type UnitAmenityCreateOrConnectWithoutAmenityInput = {
    where: UnitAmenityWhereUniqueInput
    create: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type UnitAmenityCreateManyAmenityInputEnvelope = {
    data: UnitAmenityCreateManyAmenityInput | UnitAmenityCreateManyAmenityInput[]
  }

  export type UnitAmenityUpsertWithWhereUniqueWithoutAmenityInput = {
    where: UnitAmenityWhereUniqueInput
    update: XOR<UnitAmenityUpdateWithoutAmenityInput, UnitAmenityUncheckedUpdateWithoutAmenityInput>
    create: XOR<UnitAmenityCreateWithoutAmenityInput, UnitAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type UnitAmenityUpdateWithWhereUniqueWithoutAmenityInput = {
    where: UnitAmenityWhereUniqueInput
    data: XOR<UnitAmenityUpdateWithoutAmenityInput, UnitAmenityUncheckedUpdateWithoutAmenityInput>
  }

  export type UnitAmenityUpdateManyWithWhereWithoutAmenityInput = {
    where: UnitAmenityScalarWhereInput
    data: XOR<UnitAmenityUpdateManyMutationInput, UnitAmenityUncheckedUpdateManyWithoutAmenityInput>
  }

  export type UnitAmenityScalarWhereInput = {
    AND?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
    OR?: UnitAmenityScalarWhereInput[]
    NOT?: UnitAmenityScalarWhereInput | UnitAmenityScalarWhereInput[]
    unitId?: StringFilter<"UnitAmenity"> | string
    amenityId?: StringFilter<"UnitAmenity"> | string
  }

  export type UserCreateWithoutOwnedUnitsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutCreateNestedManyWithoutStaffInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedUnitsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningUncheckedCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutUncheckedCreateNestedManyWithoutStaffInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedUnitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedUnitsInput, UserUncheckedCreateWithoutOwnedUnitsInput>
  }

  export type UnitAmenityCreateWithoutUnitInput = {
    amenity: AmenityCreateNestedOneWithoutUnitsInput
  }

  export type UnitAmenityUncheckedCreateWithoutUnitInput = {
    amenityId: string
  }

  export type UnitAmenityCreateOrConnectWithoutUnitInput = {
    where: UnitAmenityWhereUniqueInput
    create: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput>
  }

  export type UnitAmenityCreateManyUnitInputEnvelope = {
    data: UnitAmenityCreateManyUnitInput | UnitAmenityCreateManyUnitInput[]
  }

  export type UnitPhotoCreateWithoutUnitInput = {
    id?: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type UnitPhotoUncheckedCreateWithoutUnitInput = {
    id?: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type UnitPhotoCreateOrConnectWithoutUnitInput = {
    where: UnitPhotoWhereUniqueInput
    create: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput>
  }

  export type UnitPhotoCreateManyUnitInputEnvelope = {
    data: UnitPhotoCreateManyUnitInput | UnitPhotoCreateManyUnitInput[]
  }

  export type BookingCreateWithoutUnitInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    guest: UserCreateNestedOneWithoutBookingsInput
    cleanings?: CleaningCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUnitInput = {
    id?: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cleanings?: CleaningUncheckedCreateNestedManyWithoutBookingInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUnitInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput>
  }

  export type BookingCreateManyUnitInputEnvelope = {
    data: BookingCreateManyUnitInput | BookingCreateManyUnitInput[]
  }

  export type AvailabilityCreateWithoutUnitInput = {
    id?: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
  }

  export type AvailabilityUncheckedCreateWithoutUnitInput = {
    id?: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
  }

  export type AvailabilityCreateOrConnectWithoutUnitInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput>
  }

  export type AvailabilityCreateManyUnitInputEnvelope = {
    data: AvailabilityCreateManyUnitInput | AvailabilityCreateManyUnitInput[]
  }

  export type InventoryCreateWithoutUnitInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    consumptions?: ConsumptionCreateNestedManyWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutUnitInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    consumptions?: ConsumptionUncheckedCreateNestedManyWithoutInventoryInput
  }

  export type InventoryCreateOrConnectWithoutUnitInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput>
  }

  export type InventoryCreateManyUnitInputEnvelope = {
    data: InventoryCreateManyUnitInput | InventoryCreateManyUnitInput[]
  }

  export type CleaningCreateWithoutUnitInput = {
    id?: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
    booking?: BookingCreateNestedOneWithoutCleaningsInput
    cleaner: UserCreateNestedOneWithoutCleaningTasksInput
  }

  export type CleaningUncheckedCreateWithoutUnitInput = {
    id?: string
    bookingId?: string | null
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CleaningCreateOrConnectWithoutUnitInput = {
    where: CleaningWhereUniqueInput
    create: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput>
  }

  export type CleaningCreateManyUnitInputEnvelope = {
    data: CleaningCreateManyUnitInput | CleaningCreateManyUnitInput[]
  }

  export type CheckInOutCreateWithoutUnitInput = {
    id?: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutCheckInOutsInput
    staff: UserCreateNestedOneWithoutCheckInOutTasksInput
  }

  export type CheckInOutUncheckedCreateWithoutUnitInput = {
    id?: string
    bookingId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateOrConnectWithoutUnitInput = {
    where: CheckInOutWhereUniqueInput
    create: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput>
  }

  export type CheckInOutCreateManyUnitInputEnvelope = {
    data: CheckInOutCreateManyUnitInput | CheckInOutCreateManyUnitInput[]
  }

  export type ExpenseCreateWithoutUnitInput = {
    id?: string
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutExpensesInput
  }

  export type ExpenseUncheckedCreateWithoutUnitInput = {
    id?: string
    userId: string
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateOrConnectWithoutUnitInput = {
    where: ExpenseWhereUniqueInput
    create: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput>
  }

  export type ExpenseCreateManyUnitInputEnvelope = {
    data: ExpenseCreateManyUnitInput | ExpenseCreateManyUnitInput[]
  }

  export type UserUpsertWithoutOwnedUnitsInput = {
    update: XOR<UserUpdateWithoutOwnedUnitsInput, UserUncheckedUpdateWithoutOwnedUnitsInput>
    create: XOR<UserCreateWithoutOwnedUnitsInput, UserUncheckedCreateWithoutOwnedUnitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedUnitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedUnitsInput, UserUncheckedUpdateWithoutOwnedUnitsInput>
  }

  export type UserUpdateWithoutOwnedUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUncheckedUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUncheckedUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UnitAmenityUpsertWithWhereUniqueWithoutUnitInput = {
    where: UnitAmenityWhereUniqueInput
    update: XOR<UnitAmenityUpdateWithoutUnitInput, UnitAmenityUncheckedUpdateWithoutUnitInput>
    create: XOR<UnitAmenityCreateWithoutUnitInput, UnitAmenityUncheckedCreateWithoutUnitInput>
  }

  export type UnitAmenityUpdateWithWhereUniqueWithoutUnitInput = {
    where: UnitAmenityWhereUniqueInput
    data: XOR<UnitAmenityUpdateWithoutUnitInput, UnitAmenityUncheckedUpdateWithoutUnitInput>
  }

  export type UnitAmenityUpdateManyWithWhereWithoutUnitInput = {
    where: UnitAmenityScalarWhereInput
    data: XOR<UnitAmenityUpdateManyMutationInput, UnitAmenityUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitPhotoUpsertWithWhereUniqueWithoutUnitInput = {
    where: UnitPhotoWhereUniqueInput
    update: XOR<UnitPhotoUpdateWithoutUnitInput, UnitPhotoUncheckedUpdateWithoutUnitInput>
    create: XOR<UnitPhotoCreateWithoutUnitInput, UnitPhotoUncheckedCreateWithoutUnitInput>
  }

  export type UnitPhotoUpdateWithWhereUniqueWithoutUnitInput = {
    where: UnitPhotoWhereUniqueInput
    data: XOR<UnitPhotoUpdateWithoutUnitInput, UnitPhotoUncheckedUpdateWithoutUnitInput>
  }

  export type UnitPhotoUpdateManyWithWhereWithoutUnitInput = {
    where: UnitPhotoScalarWhereInput
    data: XOR<UnitPhotoUpdateManyMutationInput, UnitPhotoUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitPhotoScalarWhereInput = {
    AND?: UnitPhotoScalarWhereInput | UnitPhotoScalarWhereInput[]
    OR?: UnitPhotoScalarWhereInput[]
    NOT?: UnitPhotoScalarWhereInput | UnitPhotoScalarWhereInput[]
    id?: StringFilter<"UnitPhoto"> | string
    unitId?: StringFilter<"UnitPhoto"> | string
    url?: StringFilter<"UnitPhoto"> | string
    caption?: StringNullableFilter<"UnitPhoto"> | string | null
    order?: IntFilter<"UnitPhoto"> | number
    isPrimary?: BoolFilter<"UnitPhoto"> | boolean
  }

  export type BookingUpsertWithWhereUniqueWithoutUnitInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUnitInput, BookingUncheckedUpdateWithoutUnitInput>
    create: XOR<BookingCreateWithoutUnitInput, BookingUncheckedCreateWithoutUnitInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUnitInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUnitInput, BookingUncheckedUpdateWithoutUnitInput>
  }

  export type BookingUpdateManyWithWhereWithoutUnitInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUnitInput>
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUnitInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUnitInput, AvailabilityUncheckedUpdateWithoutUnitInput>
    create: XOR<AvailabilityCreateWithoutUnitInput, AvailabilityUncheckedCreateWithoutUnitInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUnitInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUnitInput, AvailabilityUncheckedUpdateWithoutUnitInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUnitInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUnitInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    unitId?: StringFilter<"Availability"> | string
    date?: DateTimeFilter<"Availability"> | Date | string
    available?: BoolFilter<"Availability"> | boolean
    price?: FloatNullableFilter<"Availability"> | number | null
    minStay?: IntNullableFilter<"Availability"> | number | null
    maxStay?: IntNullableFilter<"Availability"> | number | null
    notes?: StringNullableFilter<"Availability"> | string | null
  }

  export type InventoryUpsertWithWhereUniqueWithoutUnitInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutUnitInput, InventoryUncheckedUpdateWithoutUnitInput>
    create: XOR<InventoryCreateWithoutUnitInput, InventoryUncheckedCreateWithoutUnitInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutUnitInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutUnitInput, InventoryUncheckedUpdateWithoutUnitInput>
  }

  export type InventoryUpdateManyWithWhereWithoutUnitInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutUnitInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    unitId?: StringFilter<"Inventory"> | string
    name?: StringFilter<"Inventory"> | string
    description?: StringNullableFilter<"Inventory"> | string | null
    quantity?: IntFilter<"Inventory"> | number
    minQuantity?: IntFilter<"Inventory"> | number
    cost?: FloatNullableFilter<"Inventory"> | number | null
    supplier?: StringNullableFilter<"Inventory"> | string | null
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type CleaningUpsertWithWhereUniqueWithoutUnitInput = {
    where: CleaningWhereUniqueInput
    update: XOR<CleaningUpdateWithoutUnitInput, CleaningUncheckedUpdateWithoutUnitInput>
    create: XOR<CleaningCreateWithoutUnitInput, CleaningUncheckedCreateWithoutUnitInput>
  }

  export type CleaningUpdateWithWhereUniqueWithoutUnitInput = {
    where: CleaningWhereUniqueInput
    data: XOR<CleaningUpdateWithoutUnitInput, CleaningUncheckedUpdateWithoutUnitInput>
  }

  export type CleaningUpdateManyWithWhereWithoutUnitInput = {
    where: CleaningScalarWhereInput
    data: XOR<CleaningUpdateManyMutationInput, CleaningUncheckedUpdateManyWithoutUnitInput>
  }

  export type CheckInOutUpsertWithWhereUniqueWithoutUnitInput = {
    where: CheckInOutWhereUniqueInput
    update: XOR<CheckInOutUpdateWithoutUnitInput, CheckInOutUncheckedUpdateWithoutUnitInput>
    create: XOR<CheckInOutCreateWithoutUnitInput, CheckInOutUncheckedCreateWithoutUnitInput>
  }

  export type CheckInOutUpdateWithWhereUniqueWithoutUnitInput = {
    where: CheckInOutWhereUniqueInput
    data: XOR<CheckInOutUpdateWithoutUnitInput, CheckInOutUncheckedUpdateWithoutUnitInput>
  }

  export type CheckInOutUpdateManyWithWhereWithoutUnitInput = {
    where: CheckInOutScalarWhereInput
    data: XOR<CheckInOutUpdateManyMutationInput, CheckInOutUncheckedUpdateManyWithoutUnitInput>
  }

  export type ExpenseUpsertWithWhereUniqueWithoutUnitInput = {
    where: ExpenseWhereUniqueInput
    update: XOR<ExpenseUpdateWithoutUnitInput, ExpenseUncheckedUpdateWithoutUnitInput>
    create: XOR<ExpenseCreateWithoutUnitInput, ExpenseUncheckedCreateWithoutUnitInput>
  }

  export type ExpenseUpdateWithWhereUniqueWithoutUnitInput = {
    where: ExpenseWhereUniqueInput
    data: XOR<ExpenseUpdateWithoutUnitInput, ExpenseUncheckedUpdateWithoutUnitInput>
  }

  export type ExpenseUpdateManyWithWhereWithoutUnitInput = {
    where: ExpenseScalarWhereInput
    data: XOR<ExpenseUpdateManyMutationInput, ExpenseUncheckedUpdateManyWithoutUnitInput>
  }

  export type UnitCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutAmenitiesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutAmenitiesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutAmenitiesInput, UnitUncheckedCreateWithoutAmenitiesInput>
  }

  export type AmenityCreateWithoutUnitsInput = {
    id?: string
    name: string
    logo?: string | null
  }

  export type AmenityUncheckedCreateWithoutUnitsInput = {
    id?: string
    name: string
    logo?: string | null
  }

  export type AmenityCreateOrConnectWithoutUnitsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutUnitsInput, AmenityUncheckedCreateWithoutUnitsInput>
  }

  export type UnitUpsertWithoutAmenitiesInput = {
    update: XOR<UnitUpdateWithoutAmenitiesInput, UnitUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<UnitCreateWithoutAmenitiesInput, UnitUncheckedCreateWithoutAmenitiesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutAmenitiesInput, UnitUncheckedUpdateWithoutAmenitiesInput>
  }

  export type UnitUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutAmenitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type AmenityUpsertWithoutUnitsInput = {
    update: XOR<AmenityUpdateWithoutUnitsInput, AmenityUncheckedUpdateWithoutUnitsInput>
    create: XOR<AmenityCreateWithoutUnitsInput, AmenityUncheckedCreateWithoutUnitsInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutUnitsInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutUnitsInput, AmenityUncheckedUpdateWithoutUnitsInput>
  }

  export type AmenityUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AmenityUncheckedUpdateWithoutUnitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UnitCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutPhotosInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutPhotosInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
  }

  export type UnitUpsertWithoutPhotosInput = {
    update: XOR<UnitUpdateWithoutPhotosInput, UnitUncheckedUpdateWithoutPhotosInput>
    create: XOR<UnitCreateWithoutPhotosInput, UnitUncheckedCreateWithoutPhotosInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutPhotosInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutPhotosInput, UnitUncheckedUpdateWithoutPhotosInput>
  }

  export type UnitUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutPhotosInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutAvailabilityInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutAvailabilityInput, UnitUncheckedCreateWithoutAvailabilityInput>
  }

  export type UnitUpsertWithoutAvailabilityInput = {
    update: XOR<UnitUpdateWithoutAvailabilityInput, UnitUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UnitCreateWithoutAvailabilityInput, UnitUncheckedCreateWithoutAvailabilityInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutAvailabilityInput, UnitUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UnitUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateWithoutBookingsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutBookingsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutBookingsInput, UnitUncheckedCreateWithoutBookingsInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitCreateNestedManyWithoutOwnerInput
    cleaningTasks?: CleaningCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutCreateNestedManyWithoutStaffInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitUncheckedCreateNestedManyWithoutOwnerInput
    cleaningTasks?: CleaningUncheckedCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutUncheckedCreateNestedManyWithoutStaffInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type CleaningCreateWithoutBookingInput = {
    id?: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutCleaningsInput
    cleaner: UserCreateNestedOneWithoutCleaningTasksInput
  }

  export type CleaningUncheckedCreateWithoutBookingInput = {
    id?: string
    unitId: string
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CleaningCreateOrConnectWithoutBookingInput = {
    where: CleaningWhereUniqueInput
    create: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput>
  }

  export type CleaningCreateManyBookingInputEnvelope = {
    data: CleaningCreateManyBookingInput | CleaningCreateManyBookingInput[]
  }

  export type CheckInOutCreateWithoutBookingInput = {
    id?: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutCheckInOutsInput
    staff: UserCreateNestedOneWithoutCheckInOutTasksInput
  }

  export type CheckInOutUncheckedCreateWithoutBookingInput = {
    id?: string
    unitId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateOrConnectWithoutBookingInput = {
    where: CheckInOutWhereUniqueInput
    create: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput>
  }

  export type CheckInOutCreateManyBookingInputEnvelope = {
    data: CheckInOutCreateManyBookingInput | CheckInOutCreateManyBookingInput[]
  }

  export type UnitUpsertWithoutBookingsInput = {
    update: XOR<UnitUpdateWithoutBookingsInput, UnitUncheckedUpdateWithoutBookingsInput>
    create: XOR<UnitCreateWithoutBookingsInput, UnitUncheckedCreateWithoutBookingsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutBookingsInput, UnitUncheckedUpdateWithoutBookingsInput>
  }

  export type UnitUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUpdateManyWithoutOwnerNestedInput
    cleaningTasks?: CleaningUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUncheckedUpdateManyWithoutOwnerNestedInput
    cleaningTasks?: CleaningUncheckedUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUncheckedUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CleaningUpsertWithWhereUniqueWithoutBookingInput = {
    where: CleaningWhereUniqueInput
    update: XOR<CleaningUpdateWithoutBookingInput, CleaningUncheckedUpdateWithoutBookingInput>
    create: XOR<CleaningCreateWithoutBookingInput, CleaningUncheckedCreateWithoutBookingInput>
  }

  export type CleaningUpdateWithWhereUniqueWithoutBookingInput = {
    where: CleaningWhereUniqueInput
    data: XOR<CleaningUpdateWithoutBookingInput, CleaningUncheckedUpdateWithoutBookingInput>
  }

  export type CleaningUpdateManyWithWhereWithoutBookingInput = {
    where: CleaningScalarWhereInput
    data: XOR<CleaningUpdateManyMutationInput, CleaningUncheckedUpdateManyWithoutBookingInput>
  }

  export type CheckInOutUpsertWithWhereUniqueWithoutBookingInput = {
    where: CheckInOutWhereUniqueInput
    update: XOR<CheckInOutUpdateWithoutBookingInput, CheckInOutUncheckedUpdateWithoutBookingInput>
    create: XOR<CheckInOutCreateWithoutBookingInput, CheckInOutUncheckedCreateWithoutBookingInput>
  }

  export type CheckInOutUpdateWithWhereUniqueWithoutBookingInput = {
    where: CheckInOutWhereUniqueInput
    data: XOR<CheckInOutUpdateWithoutBookingInput, CheckInOutUncheckedUpdateWithoutBookingInput>
  }

  export type CheckInOutUpdateManyWithWhereWithoutBookingInput = {
    where: CheckInOutScalarWhereInput
    data: XOR<CheckInOutUpdateManyMutationInput, CheckInOutUncheckedUpdateManyWithoutBookingInput>
  }

  export type UnitCreateWithoutCleaningsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutCleaningsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutCleaningsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutCleaningsInput, UnitUncheckedCreateWithoutCleaningsInput>
  }

  export type BookingCreateWithoutCleaningsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutBookingsInput
    guest: UserCreateNestedOneWithoutBookingsInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCleaningsInput = {
    id?: string
    unitId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCleaningsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCleaningsInput, BookingUncheckedCreateWithoutCleaningsInput>
  }

  export type UserCreateWithoutCleaningTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
    checkInOutTasks?: CheckInOutCreateNestedManyWithoutStaffInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCleaningTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    checkInOutTasks?: CheckInOutUncheckedCreateNestedManyWithoutStaffInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCleaningTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCleaningTasksInput, UserUncheckedCreateWithoutCleaningTasksInput>
  }

  export type UnitUpsertWithoutCleaningsInput = {
    update: XOR<UnitUpdateWithoutCleaningsInput, UnitUncheckedUpdateWithoutCleaningsInput>
    create: XOR<UnitCreateWithoutCleaningsInput, UnitUncheckedCreateWithoutCleaningsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutCleaningsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutCleaningsInput, UnitUncheckedUpdateWithoutCleaningsInput>
  }

  export type UnitUpdateWithoutCleaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutCleaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type BookingUpsertWithoutCleaningsInput = {
    update: XOR<BookingUpdateWithoutCleaningsInput, BookingUncheckedUpdateWithoutCleaningsInput>
    create: XOR<BookingCreateWithoutCleaningsInput, BookingUncheckedCreateWithoutCleaningsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCleaningsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCleaningsInput, BookingUncheckedUpdateWithoutCleaningsInput>
  }

  export type BookingUpdateWithoutCleaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutBookingsNestedInput
    guest?: UserUpdateOneRequiredWithoutBookingsNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCleaningsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UserUpsertWithoutCleaningTasksInput = {
    update: XOR<UserUpdateWithoutCleaningTasksInput, UserUncheckedUpdateWithoutCleaningTasksInput>
    create: XOR<UserCreateWithoutCleaningTasksInput, UserUncheckedCreateWithoutCleaningTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCleaningTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCleaningTasksInput, UserUncheckedUpdateWithoutCleaningTasksInput>
  }

  export type UserUpdateWithoutCleaningTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    checkInOutTasks?: CheckInOutUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCleaningTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    checkInOutTasks?: CheckInOutUncheckedUpdateManyWithoutStaffNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type BookingCreateWithoutCheckInOutsInput = {
    id?: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    unit: UnitCreateNestedOneWithoutBookingsInput
    guest: UserCreateNestedOneWithoutBookingsInput
    cleanings?: CleaningCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutCheckInOutsInput = {
    id?: string
    unitId: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cleanings?: CleaningUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutCheckInOutsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutCheckInOutsInput, BookingUncheckedCreateWithoutCheckInOutsInput>
  }

  export type UnitCreateWithoutCheckInOutsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutCheckInOutsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutCheckInOutsInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutCheckInOutsInput, UnitUncheckedCreateWithoutCheckInOutsInput>
  }

  export type UserCreateWithoutCheckInOutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningCreateNestedManyWithoutCleanerInput
    expenses?: ExpenseCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCheckInOutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningUncheckedCreateNestedManyWithoutCleanerInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCheckInOutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCheckInOutTasksInput, UserUncheckedCreateWithoutCheckInOutTasksInput>
  }

  export type BookingUpsertWithoutCheckInOutsInput = {
    update: XOR<BookingUpdateWithoutCheckInOutsInput, BookingUncheckedUpdateWithoutCheckInOutsInput>
    create: XOR<BookingCreateWithoutCheckInOutsInput, BookingUncheckedCreateWithoutCheckInOutsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutCheckInOutsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutCheckInOutsInput, BookingUncheckedUpdateWithoutCheckInOutsInput>
  }

  export type BookingUpdateWithoutCheckInOutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutBookingsNestedInput
    guest?: UserUpdateOneRequiredWithoutBookingsNestedInput
    cleanings?: CleaningUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutCheckInOutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleanings?: CleaningUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UnitUpsertWithoutCheckInOutsInput = {
    update: XOR<UnitUpdateWithoutCheckInOutsInput, UnitUncheckedUpdateWithoutCheckInOutsInput>
    create: XOR<UnitCreateWithoutCheckInOutsInput, UnitUncheckedCreateWithoutCheckInOutsInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutCheckInOutsInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutCheckInOutsInput, UnitUncheckedUpdateWithoutCheckInOutsInput>
  }

  export type UnitUpdateWithoutCheckInOutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutCheckInOutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UserUpsertWithoutCheckInOutTasksInput = {
    update: XOR<UserUpdateWithoutCheckInOutTasksInput, UserUncheckedUpdateWithoutCheckInOutTasksInput>
    create: XOR<UserCreateWithoutCheckInOutTasksInput, UserUncheckedCreateWithoutCheckInOutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCheckInOutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCheckInOutTasksInput, UserUncheckedUpdateWithoutCheckInOutTasksInput>
  }

  export type UserUpdateWithoutCheckInOutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUpdateManyWithoutCleanerNestedInput
    expenses?: ExpenseUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCheckInOutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUncheckedUpdateManyWithoutCleanerNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExpensesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitCreateNestedManyWithoutOwnerInput
    bookings?: BookingCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutCreateNestedManyWithoutStaffInput
  }

  export type UserUncheckedCreateWithoutExpensesInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: $Enums.UserRole
    phone?: string | null
    avatar?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ownedUnits?: UnitUncheckedCreateNestedManyWithoutOwnerInput
    bookings?: BookingUncheckedCreateNestedManyWithoutGuestInput
    cleaningTasks?: CleaningUncheckedCreateNestedManyWithoutCleanerInput
    checkInOutTasks?: CheckInOutUncheckedCreateNestedManyWithoutStaffInput
  }

  export type UserCreateOrConnectWithoutExpensesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
  }

  export type UnitCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    inventory?: InventoryCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    inventory?: InventoryUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutExpensesInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutExpensesInput, UnitUncheckedCreateWithoutExpensesInput>
  }

  export type UserUpsertWithoutExpensesInput = {
    update: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
    create: XOR<UserCreateWithoutExpensesInput, UserUncheckedCreateWithoutExpensesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExpensesInput, UserUncheckedUpdateWithoutExpensesInput>
  }

  export type UserUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUpdateManyWithoutStaffNestedInput
  }

  export type UserUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedUnits?: UnitUncheckedUpdateManyWithoutOwnerNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutGuestNestedInput
    cleaningTasks?: CleaningUncheckedUpdateManyWithoutCleanerNestedInput
    checkInOutTasks?: CheckInOutUncheckedUpdateManyWithoutStaffNestedInput
  }

  export type UnitUpsertWithoutExpensesInput = {
    update: XOR<UnitUpdateWithoutExpensesInput, UnitUncheckedUpdateWithoutExpensesInput>
    create: XOR<UnitCreateWithoutExpensesInput, UnitUncheckedCreateWithoutExpensesInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutExpensesInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutExpensesInput, UnitUncheckedUpdateWithoutExpensesInput>
  }

  export type UnitUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitCreateWithoutInventoryInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    owner: UserCreateNestedOneWithoutOwnedUnitsInput
    amenities?: UnitAmenityCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoCreateNestedManyWithoutUnitInput
    bookings?: BookingCreateNestedManyWithoutUnitInput
    availability?: AvailabilityCreateNestedManyWithoutUnitInput
    cleanings?: CleaningCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutCreateNestedManyWithoutUnitInput
    expenses?: ExpenseCreateNestedManyWithoutUnitInput
  }

  export type UnitUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
    ownerId: string
    amenities?: UnitAmenityUncheckedCreateNestedManyWithoutUnitInput
    photos?: UnitPhotoUncheckedCreateNestedManyWithoutUnitInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUnitInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUnitInput
    cleanings?: CleaningUncheckedCreateNestedManyWithoutUnitInput
    checkInOuts?: CheckInOutUncheckedCreateNestedManyWithoutUnitInput
    expenses?: ExpenseUncheckedCreateNestedManyWithoutUnitInput
  }

  export type UnitCreateOrConnectWithoutInventoryInput = {
    where: UnitWhereUniqueInput
    create: XOR<UnitCreateWithoutInventoryInput, UnitUncheckedCreateWithoutInventoryInput>
  }

  export type ConsumptionCreateWithoutInventoryInput = {
    id?: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
  }

  export type ConsumptionUncheckedCreateWithoutInventoryInput = {
    id?: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
  }

  export type ConsumptionCreateOrConnectWithoutInventoryInput = {
    where: ConsumptionWhereUniqueInput
    create: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput>
  }

  export type ConsumptionCreateManyInventoryInputEnvelope = {
    data: ConsumptionCreateManyInventoryInput | ConsumptionCreateManyInventoryInput[]
  }

  export type UnitUpsertWithoutInventoryInput = {
    update: XOR<UnitUpdateWithoutInventoryInput, UnitUncheckedUpdateWithoutInventoryInput>
    create: XOR<UnitCreateWithoutInventoryInput, UnitUncheckedCreateWithoutInventoryInput>
    where?: UnitWhereInput
  }

  export type UnitUpdateToOneWithWhereWithoutInventoryInput = {
    where?: UnitWhereInput
    data: XOR<UnitUpdateWithoutInventoryInput, UnitUncheckedUpdateWithoutInventoryInput>
  }

  export type UnitUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    owner?: UserUpdateOneRequiredWithoutOwnedUnitsNestedInput
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    ownerId?: StringFieldUpdateOperationsInput | string
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type ConsumptionUpsertWithWhereUniqueWithoutInventoryInput = {
    where: ConsumptionWhereUniqueInput
    update: XOR<ConsumptionUpdateWithoutInventoryInput, ConsumptionUncheckedUpdateWithoutInventoryInput>
    create: XOR<ConsumptionCreateWithoutInventoryInput, ConsumptionUncheckedCreateWithoutInventoryInput>
  }

  export type ConsumptionUpdateWithWhereUniqueWithoutInventoryInput = {
    where: ConsumptionWhereUniqueInput
    data: XOR<ConsumptionUpdateWithoutInventoryInput, ConsumptionUncheckedUpdateWithoutInventoryInput>
  }

  export type ConsumptionUpdateManyWithWhereWithoutInventoryInput = {
    where: ConsumptionScalarWhereInput
    data: XOR<ConsumptionUpdateManyMutationInput, ConsumptionUncheckedUpdateManyWithoutInventoryInput>
  }

  export type ConsumptionScalarWhereInput = {
    AND?: ConsumptionScalarWhereInput | ConsumptionScalarWhereInput[]
    OR?: ConsumptionScalarWhereInput[]
    NOT?: ConsumptionScalarWhereInput | ConsumptionScalarWhereInput[]
    id?: StringFilter<"Consumption"> | string
    inventoryId?: StringFilter<"Consumption"> | string
    quantity?: IntFilter<"Consumption"> | number
    notes?: StringNullableFilter<"Consumption"> | string | null
    consumedAt?: DateTimeFilter<"Consumption"> | Date | string
    createdAt?: DateTimeFilter<"Consumption"> | Date | string
  }

  export type InventoryCreateWithoutConsumptionsInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
    unit: UnitCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateWithoutConsumptionsInput = {
    id?: string
    unitId: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutConsumptionsInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutConsumptionsInput, InventoryUncheckedCreateWithoutConsumptionsInput>
  }

  export type InventoryUpsertWithoutConsumptionsInput = {
    update: XOR<InventoryUpdateWithoutConsumptionsInput, InventoryUncheckedUpdateWithoutConsumptionsInput>
    create: XOR<InventoryCreateWithoutConsumptionsInput, InventoryUncheckedCreateWithoutConsumptionsInput>
    where?: InventoryWhereInput
  }

  export type InventoryUpdateToOneWithWhereWithoutConsumptionsInput = {
    where?: InventoryWhereInput
    data: XOR<InventoryUpdateWithoutConsumptionsInput, InventoryUncheckedUpdateWithoutConsumptionsInput>
  }

  export type InventoryUpdateWithoutConsumptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutConsumptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    pricePerDay: number
    currency?: string
    active?: boolean
  }

  export type BookingCreateManyGuestInput = {
    id?: string
    unitId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CleaningCreateManyCleanerInput = {
    id?: string
    unitId: string
    bookingId?: string | null
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateManyStaffInput = {
    id?: string
    bookingId: string
    unitId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateManyUserInput = {
    id?: string
    unitId?: string | null
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type UnitUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    amenities?: UnitAmenityUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUpdateManyWithoutUnitNestedInput
    bookings?: BookingUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    amenities?: UnitAmenityUncheckedUpdateManyWithoutUnitNestedInput
    photos?: UnitPhotoUncheckedUpdateManyWithoutUnitNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUnitNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUnitNestedInput
    inventory?: InventoryUncheckedUpdateManyWithoutUnitNestedInput
    cleanings?: CleaningUncheckedUpdateManyWithoutUnitNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutUnitNestedInput
    expenses?: ExpenseUncheckedUpdateManyWithoutUnitNestedInput
  }

  export type UnitUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    pricePerDay?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutBookingsNestedInput
    cleanings?: CleaningUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleanings?: CleaningUncheckedUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutGuestInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUpdateWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutCleaningsNestedInput
    booking?: BookingUpdateOneWithoutCleaningsNestedInput
  }

  export type CleaningUncheckedUpdateWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUncheckedUpdateManyWithoutCleanerInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutCheckInOutsNestedInput
    unit?: UnitUpdateOneRequiredWithoutCheckInOutsNestedInput
  }

  export type CheckInOutUncheckedUpdateWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUncheckedUpdateManyWithoutStaffInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UnitAmenityCreateManyAmenityInput = {
    unitId: string
  }

  export type UnitAmenityUpdateWithoutAmenityInput = {
    unit?: UnitUpdateOneRequiredWithoutAmenitiesNestedInput
  }

  export type UnitAmenityUncheckedUpdateWithoutAmenityInput = {
    unitId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitAmenityUncheckedUpdateManyWithoutAmenityInput = {
    unitId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitAmenityCreateManyUnitInput = {
    amenityId: string
  }

  export type UnitPhotoCreateManyUnitInput = {
    id?: string
    url: string
    caption?: string | null
    order?: number
    isPrimary?: boolean
  }

  export type BookingCreateManyUnitInput = {
    id?: string
    guestId: string
    checkIn: Date | string
    checkOut: Date | string
    totalPrice: number
    currency?: string
    status?: $Enums.BookingStatus
    source?: $Enums.BookingSource
    externalId?: string | null
    guestName: string
    guestEmail: string
    guestPhone?: string | null
    numberOfGuests?: number
    specialRequests?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateManyUnitInput = {
    id?: string
    date: Date | string
    available?: boolean
    price?: number | null
    minStay?: number | null
    maxStay?: number | null
    notes?: string | null
  }

  export type InventoryCreateManyUnitInput = {
    id?: string
    name: string
    description?: string | null
    quantity?: number
    minQuantity?: number
    cost?: number | null
    supplier?: string | null
    lastUpdated?: Date | string
    createdAt?: Date | string
  }

  export type CleaningCreateManyUnitInput = {
    id?: string
    bookingId?: string | null
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateManyUnitInput = {
    id?: string
    bookingId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type ExpenseCreateManyUnitInput = {
    id?: string
    userId: string
    description: string
    amount: number
    currency?: string
    category?: string | null
    date?: Date | string
    receipt?: string | null
    createdAt?: Date | string
  }

  export type UnitAmenityUpdateWithoutUnitInput = {
    amenity?: AmenityUpdateOneRequiredWithoutUnitsNestedInput
  }

  export type UnitAmenityUncheckedUpdateWithoutUnitInput = {
    amenityId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitAmenityUncheckedUpdateManyWithoutUnitInput = {
    amenityId?: StringFieldUpdateOperationsInput | string
  }

  export type UnitPhotoUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitPhotoUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnitPhotoUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BookingUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    guest?: UserUpdateOneRequiredWithoutBookingsNestedInput
    cleanings?: CleaningUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cleanings?: CleaningUncheckedUpdateManyWithoutBookingNestedInput
    checkInOuts?: CheckInOutUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    guestId?: StringFieldUpdateOperationsInput | string
    checkIn?: DateTimeFieldUpdateOperationsInput | Date | string
    checkOut?: DateTimeFieldUpdateOperationsInput | Date | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    source?: EnumBookingSourceFieldUpdateOperationsInput | $Enums.BookingSource
    externalId?: NullableStringFieldUpdateOperationsInput | string | null
    guestName?: StringFieldUpdateOperationsInput | string
    guestEmail?: StringFieldUpdateOperationsInput | string
    guestPhone?: NullableStringFieldUpdateOperationsInput | string | null
    numberOfGuests?: IntFieldUpdateOperationsInput | number
    specialRequests?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AvailabilityUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    available?: BoolFieldUpdateOperationsInput | boolean
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    minStay?: NullableIntFieldUpdateOperationsInput | number | null
    maxStay?: NullableIntFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InventoryUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumptions?: ConsumptionUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    consumptions?: ConsumptionUncheckedUpdateManyWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    minQuantity?: IntFieldUpdateOperationsInput | number
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    supplier?: NullableStringFieldUpdateOperationsInput | string | null
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneWithoutCleaningsNestedInput
    cleaner?: UserUpdateOneRequiredWithoutCleaningTasksNestedInput
  }

  export type CleaningUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutCheckInOutsNestedInput
    staff?: UserUpdateOneRequiredWithoutCheckInOutTasksNestedInput
  }

  export type CheckInOutUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type ExpenseUncheckedUpdateWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExpenseUncheckedUpdateManyWithoutUnitInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    category?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    receipt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningCreateManyBookingInput = {
    id?: string
    unitId: string
    cleanerId: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    cost?: number | null
    createdAt?: Date | string
  }

  export type CheckInOutCreateManyBookingInput = {
    id?: string
    unitId: string
    staffId: string
    type: string
    scheduled: Date | string
    completed?: Date | string | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type CleaningUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutCleaningsNestedInput
    cleaner?: UserUpdateOneRequiredWithoutCleaningTasksNestedInput
  }

  export type CleaningUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CleaningUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    cleanerId?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    cost?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    unit?: UnitUpdateOneRequiredWithoutCheckInOutsNestedInput
    staff?: UserUpdateOneRequiredWithoutCheckInOutTasksNestedInput
  }

  export type CheckInOutUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CheckInOutUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    unitId?: StringFieldUpdateOperationsInput | string
    staffId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scheduled?: DateTimeFieldUpdateOperationsInput | Date | string
    completed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionCreateManyInventoryInput = {
    id?: string
    quantity: number
    notes?: string | null
    consumedAt?: Date | string
    createdAt?: Date | string
  }

  export type ConsumptionUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsumptionUncheckedUpdateManyWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    consumedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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